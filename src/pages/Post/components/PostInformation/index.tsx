import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { dateFormatDistanceToNow } from "../../../../util/formatter";
import { PostData } from "../../../../@types/postInterface";
import {
  HeaderContainer,
  PostDetails,
  PostInformationContainer,
  PostInformationContent,
} from "./styles";

interface PostInformationData {
  post: PostData;
}

export function PostInformation({ post }: PostInformationData) {
  let publishedDate: string = "";
  let postAuthor: string = "";

  try {
    publishedDate = dateFormatDistanceToNow(post.created_at);
    postAuthor = post.user.login;
  } catch (error) {}

  return (
    <PostInformationContainer>
      <HeaderContainer>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </NavLink>

        <a href={post.html_url} target="_blank">
          VER NO GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </HeaderContainer>

      <PostInformationContent>
        <h1>{post.title}</h1>

        <PostDetails>
          <h2>
            <FontAwesomeIcon icon={faGithub} color="#3A536B" /> {postAuthor}
          </h2>
          <h2>
            <FontAwesomeIcon icon={faCalendarDay} color="#3A536B" />{" "}
            {publishedDate}
          </h2>
          <h2>
            <FontAwesomeIcon icon={faComment} color="#3A536B" /> {post.comments}{" "}
            comentários
          </h2>
        </PostDetails>
      </PostInformationContent>
    </PostInformationContainer>
  );
}
