import CommentCreateForm from "@/components/comments/comment-create-form";
import CommentList from "@/components/comments/comment-list";
import Link from "next/link";
import PostShow from "@/components/posts/post-show";
import PostShowLoading from "@/components/posts/post-show-loading";
import { Suspense } from "react";
import { fetchCommentsByPostId } from "@/db/queries/comments";
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
      <Suspense fallback={<PostShowLoading />}>
        <PostShow postId={postId} />
      </Suspense>
      <CommentCreateForm postId={postId} startOpen />
      <CommentList
        postId={postId}
        // fetchData={() => fetchCommentsByPostId(postId)}
      />
    </div>
  );
};

export default ViewPostPage;
