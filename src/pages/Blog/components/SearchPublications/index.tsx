import { useForm } from "react-hook-form";
import { SearchPublicationsContainer } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface SearchPublicationsProps {
  quantityOfPublications: number;
  fetchPosts: (search?: string) => Promise<void>;
}

const searchPublicationsFormSchema = z.object({
  search: z.string(),
});

type SearchPublicationsInput = z.infer<typeof searchPublicationsFormSchema>;

export function SearchPublications({
  quantityOfPublications,
  fetchPosts,
}: SearchPublicationsProps) {
  const { register, handleSubmit } = useForm<SearchPublicationsInput>({
    resolver: zodResolver(searchPublicationsFormSchema),
  });

  function handleSearchPublications(data: SearchPublicationsInput) {
    fetchPosts(data.search);
  }

  return (
    <SearchPublicationsContainer>
      <header>
        <h1>Publicações</h1>
        <span>{quantityOfPublications} publicações</span>
      </header>

      <form onSubmit={handleSubmit(handleSearchPublications)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("search")}
        />
      </form>
    </SearchPublicationsContainer>
  );
}
