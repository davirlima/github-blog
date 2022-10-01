import { useCallback, useEffect, useState } from "react";
import { repository, username } from "../../data/githubInformation";
import { api } from "../../lib/axios";
import { PostPreview } from "./components/PostPreview";
import { Profile } from "./components/Profile";
import { SearchPublications } from "./components/SearchPublications";
import { BlogContainer, PostsPreviewContainer } from "./styles";

interface PostsData {
  created_at: string;
  title: string;
  body: string;
  number: number;
}

export function Blog() {
  const [posts, setPosts] = useState<PostsData[]>([]);

  const fetchPosts = useCallback(
    async (search?: string) => {
      const getParameter = search
        ? `/search/issues?q=${search}%20repo:${username}/${repository}`
        : `/search/issues?q=%20repo:${username}/${repository}`;

      const response = await api.get(getParameter);

      setPosts(response.data.items);
    },
    [posts]
  );
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Profile />
      <BlogContainer>
        <SearchPublications
          quantityOfPublications={posts.length}
          fetchPosts={fetchPosts}
        />
        <PostsPreviewContainer>
          {posts.map((post) => {
            return <PostPreview key={post.created_at} post={post} />;
          })}
        </PostsPreviewContainer>
      </BlogContainer>
    </div>
  );
}
