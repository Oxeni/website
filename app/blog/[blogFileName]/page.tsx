import MdxWrapper from 'components/blog/mdxWrapper';
import "./syntax-hightlight.css";
import { getBlogPosts, getMarkdownFile } from "actions/blog.actions";



export async function generateStaticParams() {
    const blogPosts = await getBlogPosts();

    return blogPosts.map((post) => ({
        blogFileName: post.fileName,
    }));
}




const BlogPostPage = async ({ params }: any) => {
    const { err, compiledSource, data }: any = await getMarkdownFile(params.blogFileName);

    return (
        <div>
            {!err ?
                (
                    <>
                        <h1 className="f-size-h1 f-weight-bl">
                            {data.title}
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

export default BlogPostPage;