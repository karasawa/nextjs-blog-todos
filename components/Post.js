import Link from "next/link";

function Post({ post }) {
  return (
    <div className="text-white">
      <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer border-b border-gray-500 hover:border-gray-600">
          {post.title}
        </span>
      </Link>
    </div>
  );
}

export default Post;
