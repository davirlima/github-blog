import { NavLink } from "react-router-dom";
import { dateFormatDistanceToNow } from "../../../../util/formatter";
import { PostData } from "../../../../@types/postInterface";
import { PostsPreviewContainer } from "./styles";

interface PostPreviewProps {
  post: PostData;
}

export function PostPreview({ post }: PostPreviewProps) {
  const publishedDate = dateFormatDistanceToNow(post.created_at);

  return (
    <NavLink to={`/post/${post.number}`}>
      <PostsPreviewContainer>
        <header>
          <h1>{post.title}</h1>
          <span>{publishedDate}</span>
        </header>
        <p>{post.body}</p>
      </PostsPreviewContainer>
    </NavLink>
  );
}
