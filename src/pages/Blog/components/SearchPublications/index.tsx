import { SearchPublicationsContainer } from "./styles";

export function SearchPublications() {
  return (
    <SearchPublicationsContainer>
      <header>
        <h1>Publicações</h1>
        <span>6 publicações</span>
      </header>

      <form>
        <input type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchPublicationsContainer>
  );
}
