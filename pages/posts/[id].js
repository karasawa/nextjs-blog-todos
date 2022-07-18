import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.id);
  return {
    props: {
      post,
    },
    revalidate: 5,
  };
}

function Post({ post }) {
  const router = useRouter();

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title={post.id}>
      <p className="m-4 text-white">
        {"ID : "}
        {post.id}
      </p>
      <p className="mb-4 text-xl font-bold text-white">{post.title}</p>
      <p className="mb-12 text-white">{post.created_at}</p>
      <p className="px-10 text-white">{post.content}</p>
      <Link href="/blog-page">
        <div className="flex mt-12 cursor-pointer text-white">
          <svg
            className="w-6 h-6 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
            ></path>
          </svg>
          <span>Back to blog page</span>
        </div>
      </Link>
    </Layout>
  );
}

export default Post;
