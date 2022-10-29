import fs from "fs/promises";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MdxWrapper from 'components/blog/mdxWrapper';
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from 'rehype-prism-plus';
import "./syntax-hightlight.css";




const getMarkdownFile = async (fileName: string) => {
    try {
        const rawMarkdownFile = await fs.readFile("posts/" + fileName + ".mdx", "utf8");
        const { content, data } = matter(rawMarkdownFile);

        const compiledSource = await serialize(content, {
            mdxOptions: {
                rehypePlugins: [
                    rehypeSlug,
                    [rehypeAutolinkHeadings, {
                        behavior: 'wrap'
                    }],
                    rehypePrism
                ]
            }
        });

        return { compiledSource, data };
    } catch (err) {
        return "error accoured";
    }
};

//@ts-ignore
const BlogPage = async ({ params }: any) => {
    const { compiledSource, data }: any = await getMarkdownFile(params.blogFileName);

    return (
        <div>
            <h1 className="f-size-h1 f-weight-bl">
                {data?.title}
            </h1>
            <MdxWrapper compiledSource={compiledSource} />
        </div>
    );
};

export default BlogPage;