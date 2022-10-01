import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { NavLink } from "react-router-dom";
import { PostsPreviewContainer } from "./styles";

interface PostsPreviewProps {
  post: {
    created_at: string;
    title: string;
    body: string;
    number: number;
  };
}

export function PostPreview({ post }: PostsPreviewProps) {
  const publishedDate = new Date(post.created_at);
  const formattedPublishedDate = formatDistanceToNow(publishedDate, {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <NavLink to={`/post/${post.number}`}>
      <PostsPreviewContainer>
        <header>
          <h1>{post.title}</h1>
          <span>{formattedPublishedDate}</span>
        </header>
        <p>{post.body}</p>
      </PostsPreviewContainer>
    </NavLink>
  );
}
