import React from "react";
import * as S from "./style/Form.style";

const InterviewTime = ({ documentData }) => {
  return (
    <S.FormContainer>
      <S.FormInfoContainer>
        <S.Text fontSize="15px">면접 가능 시간</S.Text>
      </S.FormInfoContainer>

      <S.TimeListCointainer></S.TimeListCointainer>
      {documentData &&
        documentData.interviewTime &&
        documentData.interviewTime.map((item, i) => (
          <S.ListText key={i} fontSize="15px">
            · {item}
          </S.ListText>
        ))}
    </S.FormContainer>
  );
};

export default InterviewTime;
