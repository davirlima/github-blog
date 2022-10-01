import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { NavLink } from "react-router-dom";
import {
  HeaderContainer,
  PostDetails,
  PostInformationContainer,
  PostInformationContent,
} from "./styles";

interface PostInformationProps {
  information: {
    html_url: string;
    title: string;
    user: {
      login: string;
    };
    comments: number;
    created_at: string;
    body: string;
  };
}

export function PostInformation({ information }: PostInformationProps) {
  const publishedDate = new Date(information.created_at);
  const formattedPublishedDate = formatDistanceToNow(publishedDate, {
    addSuffix: true,
    locale: ptBR,
  });

  return (
    <PostInformationContainer>
      <HeaderContainer>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </NavLink>

        <a href={information.html_url} target="_blank">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </HeaderContainer>

      <PostInformationContent>
        <h1>{information.title}</h1>

        <PostDetails>
          <h2>
            <FontAwesomeIcon icon={faGithub} color="#3A536B" />{" "}
            {information.user.login}
          </h2>
          <h2>
            <FontAwesomeIcon icon={faCalendarDay} color="#3A536B" />{" "}
            {formattedPublishedDate}
          </h2>
          <h2>
            <FontAwesomeIcon icon={faComment} color="#3A536B" />{" "}
            {information.comments} comentários
          </h2>
        </PostDetails>
      </PostInformationContent>
    </PostInformationContainer>
  );
}
