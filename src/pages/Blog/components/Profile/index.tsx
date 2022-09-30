import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  ProfileContainer,
  ProfileContent,
  UserDescription,
  UserInformation,
} from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/davirlima.png" />
      <ProfileContent>
        <a href="https://github.com/davirlima" target="_blank">
          GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>

        <UserDescription>
          <h1>Davi Lima</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            laboriosam molestias. Ad excepturi quidem nesciunt ipsa unde,
            recusandae aut maxime?
          </p>
        </UserDescription>

        <UserInformation>
          <h2>
            <FontAwesomeIcon icon={faGithub} color="#3A536B" /> davirlima
          </h2>
          <h2>
            <FontAwesomeIcon icon={faBuilding} color="#3A536B" /> Estudante
          </h2>
          <h2>
            <FontAwesomeIcon icon={faUserGroup} color="#3A536B" /> 32 seguidores
          </h2>
        </UserInformation>
      </ProfileContent>
    </ProfileContainer>
  );
}
