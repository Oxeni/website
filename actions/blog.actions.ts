import { blogCategoryNames } from 'components/blog/blog.types';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';


interface IBlogPost {
    fileName: string;
    title: string;
    tag: string;
    date: string;
    excerpt: string;
    min_read: number;
    thumbnail_image_url: string;
    author_name: string;
    author_image_url: string;
    author_social: string;
    highlighted?: boolean;
}


interface IGetBlogPost {
    category?: typeof blogCategoryNames[number];
}




export const getBlogPosts = async (filter?: IGetBlogPost) => {
    let blogPosts: IBlogPost[] = [];
    const allBlogFiles = await fs.readdir("posts/");

    const promises = allBlogFiles.map(async (file) => {
        const rawFileData = await fs.readFile("posts/" + file, "utf8");
        const { data } = matter(rawFileData);
        const blogPostData: IBlogPost = data as any;

        const blogPost = {
            title: blogPostData.title,
            tag: blogPostData.tag,
            date: blogPostData.date,
            fileName: file.replace(".mdx", ""),
            excerpt: blogPostData.excerpt,
            min_read: blogPostData.min_read,
            thumbnail_image_url: blogPostData.thumbnail_image_url,
            author_name: blogPostData.author_name,
            author_image_url: blogPostData.author_image_url,
            author_social: blogPostData.author_social,
            highlighted: blogPostData.highlighted,
        };

        if (!filter?.category) {
            blogPosts.push(blogPost);
        } else {
            if (blogPost.tag === filter.category) {
                blogPosts.push(blogPost);
            }
        }
    });
    await Promise.all(promises);



    blogPosts.sort((a, b) => {
        if (a.highlighted && +new Date(a.date) - +new Date(b.date))
            return 1;
        if (b.highlighted && +new Date(b.date) - +new Date(a.date))
            return -1;
        return 0;
    });

    if (blogPosts.filter(post => post.highlighted).length > 1) {
        const sortedByDate = [...blogPosts.filter(post => post.highlighted).sort((a, b) => +new Date(b.date) - +new Date(a.date))];
        sortedByDate.map((post, i) => {
            if (i > 0) {
                blogPosts[blogPosts.indexOf(post)].highlighted = false;
            }
        });
    }

    return blogPosts;
};






export const getMarkdownFile = async (fileName: string) => {
    try {
        const postPath = path.join(process.cwd(), "posts/");
        const rawMarkdownFile = await fs.readFile(path.join(postPath + fileName + ".mdx"), "utf8");
        const { content, data } = matter(rawMarkdownFile);

        const compiledSource = await serialize(content, {
            mdxOptions: {
                rehypePlugins: [
                    rehypeSlug,
                    [rehypeAutolinkHeadings, {
                        behavior: 'wrap'
                    }],
                    rehypePrism,
                ]
            }
        });
        return { undefined, compiledSource, data };
    } catch (err) {
        return { err, compiledSource: undefined, data: undefined };
    }
};
