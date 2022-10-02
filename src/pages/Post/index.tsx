import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { repository, username } from "../../data/githubInformation";
import { api } from "../../lib/axios";
import { PostInformation } from "./components/PostInformation";
import { PostContentContainer } from "./styles";
import ReactMarkdown from "react-markdown";
import { PostData } from "../../@types/postInterface";

export function Post() {
  const { postNumber } = useParams();

  const [information, setInformation] = useState<PostData>({} as PostData);

  const fetchPostInformation = useCallback(async () => {
    const response = await api.get(
      `repos/${username}/${repository}/issues/${postNumber}`
    );
    setInformation(response.data);
  }, [postNumber]);
  useEffect(() => {
    fetchPostInformation();
  }, []);

  return (
    <div>
      <PostInformation post={information} />
      <PostContentContainer>
        <ReactMarkdown>{information.body}</ReactMarkdown>
      </PostContentContainer>
    </div>
  );
}
