import { PostPreview } from "./components/PostPreview";
import { Profile } from "./components/Profile";
import { SearchPublications } from "./components/SearchPublications";
import { BlogContainer, PostsPreviewContainer } from "./styles";

export function Blog() {
  const size = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <Profile />
      <BlogContainer>
        <SearchPublications />
        <PostsPreviewContainer>
          {size.map((position) => {
            return <PostPreview key={position} />;
          })}
        </PostsPreviewContainer>
      </BlogContainer>
    </div>
  );
}
