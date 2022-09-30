import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { PostsPreviewContainer } from "./styles";

interface PostsPreviewProps {
  post: {
    created_at: string;
    title: string;
    body: string;
  };
}

export function PostPreview({ post }: PostsPreviewProps) {
  const publishedDate = new Date(post.created_at);
  const formattedPublishedDate = formatDistanceToNow(publishedDate, {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <PostsPreviewContainer>
      <header>
        <h1>{post.title}</h1>
        <span>{formattedPublishedDate}</span>
      </header>
      <p>{post.body}</p>
    </PostsPreviewContainer>
  );
}
