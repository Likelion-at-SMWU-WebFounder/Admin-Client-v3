import React from "react";
import * as S from "./style/QuestionsList.style";
import * as B from "../button/Button.style";

const QuestionsList = ({ questions, onDelete }) => {
  return (
    <S.Table>
      <S.ContentWrap>
        <S.ContentTitle>
          <S.TableCell align="center">번호</S.TableCell>
          <S.TableCell>질문</S.TableCell>
          <S.TableCell></S.TableCell>
        </S.ContentTitle>
        {questions.map((data, idx) => (
          <S.Content key={idx}>
            <S.Cell width="40px" align="center">
              {data.number}
            </S.Cell>
            <S.Cell width="50vw">{data.content}</S.Cell>

            <S.Cell>
              <B.Button color="#e08888" onClick={() => onDelete(data.id)}>
                <B.ButtonText>삭제</B.ButtonText>
              </B.Button>
            </S.Cell>
          </S.Content>
        ))}
      </S.ContentWrap>
    </S.Table>
  );
};

export default QuestionsList;
