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
import { api } from "../../../../lib/axios";
import { useCallback, useEffect, useState } from "react";
import { username } from "../../../../data/githubInformation";

interface UserInformationData {
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: string;
}

export function Profile() {
  const [userInformation, setUserInformation] = useState<UserInformationData>(
    {} as UserInformationData
  );

  const fetchUserInformation = useCallback(async () => {
    const response = await api.get(`/users/${username}`);
    setUserInformation(response.data);
  }, [userInformation]);

  useEffect(() => {
    fetchUserInformation();
  }, []);

  return (
    <ProfileContainer>
      <img src={userInformation.avatar_url} />
      <ProfileContent>
        <a href={userInformation.html_url} target="_blank">
          GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>

        <UserDescription>
          <h1>{userInformation.name}</h1>
          <p>{userInformation.bio}</p>
        </UserDescription>

        <UserInformation>
          <h2>
            <FontAwesomeIcon icon={faGithub} color="#3A536B" />{" "}
            {userInformation.login}
          </h2>
          {userInformation.company && (
            <h2>
              <FontAwesomeIcon icon={faBuilding} color="#3A536B" />{" "}
              {userInformation.company}
            </h2>
          )}
          <h2>
            <FontAwesomeIcon icon={faUserGroup} color="#3A536B" />{" "}
            {userInformation.followers} seguidores
          </h2>
        </UserInformation>
      </ProfileContent>
    </ProfileContainer>
  );
}
