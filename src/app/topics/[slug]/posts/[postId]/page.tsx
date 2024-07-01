import Link from "next/link";
import PostShow from "@/components/posts/post-show";
import paths from "@/paths";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}
const ViewPostPage = ({ params }: PostShowPageProps) => {
  const { slug, postId } = params;
  return (
    <div className="space-y-3">
      <Link className="underline decoration-solid" href={paths.topicShow(slug)}>
        {`< Back to ${slug}`}
      </Link>
      <PostShow postId={postId} />
    </div>
  );
};

export default ViewPostPage;
