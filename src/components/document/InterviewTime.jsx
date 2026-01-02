import React from "react";
import * as S from "./style/Question.style";

const InterviewTime = ({ documentData }) => {
  return (
    <S.QuestionContainer>
      <S.Text fontSize="15px" marginTop="15px">
        면접 가능 시간
      </S.Text>
      {documentData &&
        documentData.interviewTime &&
        documentData.interviewTime.map((item, i) => (
          <S.ListText key={i} fontSize="15px" marginTop="5px">
            - {item}
          </S.ListText>
        ))}
    </S.QuestionContainer>
  );
};

export default InterviewTime;
