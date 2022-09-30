import { PostsPreviewContainer } from "./styles";

interface PostsPreviewProps {
  post: {
    created_at: string;
    updated_at: string;
    title: string;
    body: string;
  };
}

export function PostPreview({ post }: PostsPreviewProps) {
  return (
    <PostsPreviewContainer>
      <header>
        <h1>{post.title}</h1>
        <span>Há 1 dia</span>
      </header>
      <p>{post.body}</p>
    </PostsPreviewContainer>
  );
}
