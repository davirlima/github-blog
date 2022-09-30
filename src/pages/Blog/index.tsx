import { Profile } from "./components/Profile";
import { SearchPublications } from "./components/SearchPublications";
import { BlogContainer } from "./styles";

export function Blog() {
  return (
    <div>
      <Profile />
      <BlogContainer>
        <SearchPublications />
      </BlogContainer>
    </div>
  );
}
