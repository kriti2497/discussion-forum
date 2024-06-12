const paths = {
  home() {
    return "/";
  },
  topicShow(slug: string) {
    return `/topics/${slug}`;
  },
  createPost(slug: string) {
    return `/topics/${slug}/posts/new`;
  },
  postShow(slug: string, postId: string) {
    return `/topics/${slug}/posts/${postId}`;
  },
};

export default paths;
