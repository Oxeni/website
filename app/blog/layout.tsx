import { getBlogPosts } from 'actions/blog.actions';
import Link from 'next/link';
import { ReactNode } from 'react';
import { blogCategoryNames } from 'components/blog/blog.types';




const BlogLayout = async ({ children }: { children: ReactNode; }) => {
    const blogPosts = await getBlogPosts();

    return (
        <div
            style={{ padding: "15vh 8vw 0 8vh" }}>
            <nav>
                {blogCategoryNames.map((tag, i) => (
                    <div key={`${tag}_${i}`}>
                        <Link href={`blog/category/${tag}`}>
                            <p>{tag}</p>
                        </Link>
                    </div>
                ))}
            </nav>
            {children}
        </div>
    );
};

export default BlogLayout;