import React from "react";
import { styled } from "styled-components";
import { usePostContext } from "../../../../context/PostContext";
import getTimeAgoText from "../../../common/getTimeAgoText";

const StyleQuestionInfo = styled.div`
  display: flex;
  font-size: 13px;
  margin-bottom: 16px;

  > div {
    margin-right: 16px;
  }
`;

export default function QuestionInfo({ postData }) {
  if (!postData) {
    return <div>Loading...</div>;
  }

  return (
    <StyleQuestionInfo>
      <div>Asked: {getTimeAgoText(postData.question_createdAt)}</div>
      <div>Modified: {getTimeAgoText(postData.question_modifiedAt)}</div>
      <div>Viewed:{postData.question_viewCount}</div>
    </StyleQuestionInfo>
  );
}
