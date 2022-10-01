import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  HeaderContainer,
  Informations,
  PostInformationContainer,
  PostInformationContent,
} from "./styles";

export function PostInformation() {
  return (
    <PostInformationContainer>
      <HeaderContainer>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </NavLink>

        <a href={""} target="_blank">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </HeaderContainer>

      <PostInformationContent>
        <h1>JavaScript data types and data structures</h1>

        <Informations>
          <h2>
            <FontAwesomeIcon icon={faGithub} color="#3A536B" /> davirlima
          </h2>
          <h2>
            <FontAwesomeIcon icon={faCalendarDay} color="#3A536B" /> Há 1 dia
          </h2>
          <h2>
            <FontAwesomeIcon icon={faComment} color="#3A536B" /> 5 comentários
          </h2>
        </Informations>
      </PostInformationContent>
    </PostInformationContainer>
  );
}
