import PostsGrid from "./PostsGrid";
import { getAllPosts } from "@/service/posts";

export default async function FeaturedPosts() {
  // 1. 모든 포스트 데이터를 읽어와야 함.
  const posts = await getAllPosts();

  // 2. 모든 포스트 데이터를 보여줌.
  return (
    <section>
      <h2>FeaturedPosts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
