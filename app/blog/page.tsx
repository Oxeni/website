import { getBlogPosts } from 'actions/blog.actions';
import Image from 'next/image';
import Link from 'next/link';




const BlogPage = async () => {
  const blogPosts = await getBlogPosts();


  return (
    <>
      <pre>
        {JSON.stringify(blogPosts, null, 4)}
      </pre>
      <h1>blog</h1>
      <ul style={{
        display: "flex",
        flexWrap: "wrap",
        gap: '5rem'
      }}>
        {blogPosts.map(blog => (
          <li key={blog.fileName}>
            <Link href={`/blog/${blog.fileName}`}>
              <div
                className="blog_image"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: "100%",
                  width: "450px",
                }}>
                <Image
                  src={blog.thumbnail_image_url}
                  blurDataURL={`/_next/image?url=${blog.thumbnail_image_url}&w=16&q=10`}
                  placeholder="blur"
                  alt={`image of ${blog.title}`}
                  fill
                  style={{
                    objectFit: "contain",
                    maxWidth: "100%",
                    maxHeight: "auto",
                  }}
                />
              </div>
              <p className="f-size-p2 f-weight-r">
                {blog.title}
              </p>
              <p className="f-size-p5 f-weight-l">
                {blog.tag}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogPage;