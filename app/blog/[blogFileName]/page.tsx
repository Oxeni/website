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

        Promise.resolve(compiledSource);
        return { undefined, compiledSource, data };
    } catch (err) {
        return { err, compiledSource: undefined, data: undefined };
    }
};

//@ts-ignore
const Page = async ({ params }: any) => {
    const { err, compiledSource, data }: any = await getMarkdownFile(params.blogFileName);

    return (
        <div>
            {!err ?
                (
                    <>
                        <h1 className="f-size-h1 f-weight-bl">
                            title
                        </h1>
                        <MdxWrapper compiledSource={compiledSource} />
                    </>
                ) : (
                    <pre>
                        {JSON.stringify(err, null, 4)}
                    </pre>
                )}
        </div>
    );
};

export default Page;