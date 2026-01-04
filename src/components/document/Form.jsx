import React from "react";
import * as S from "./style/Form.style";
import * as L from "../../style/LayoutStyle";

// TODO : img 잘 나오는지 확인
const Form = ({ documentData }) => {
  return (
    <>
      <S.Row>
        {documentData && (
          <>
            {documentData.studentInfo.track === "fe" && (
              <L.Title>프론트엔드 트랙</L.Title>
            )}
            {documentData.studentInfo.track === "be" && (
              <L.Title>백엔드 트랙</L.Title>
            )}
            {documentData.studentInfo.track === "pm" && (
              <L.Title>기획 · 디자인 트랙</L.Title>
            )}
          </>
        )}
        <L.Title>&nbsp;서류 확인</L.Title>
      </S.Row>
      <L.About>지원자의 서류 내용을 조회합니다.</L.About>

      <S.FormContainer>
        <S.FormInfoContainer>
          <S.Text>성함</S.Text>
          <S.Div>{documentData && documentData.studentInfo.name}</S.Div>
        </S.FormInfoContainer>
        <S.FormInfoContainer>
          <S.Text>학번</S.Text>
          <S.Div>{documentData && documentData.studentInfo.studentId}</S.Div>
        </S.FormInfoContainer>
        <S.FormInfoContainer>
          <S.Text>전공</S.Text>
          <S.Div>{documentData && documentData.studentInfo.major}</S.Div>
        </S.FormInfoContainer>
        <S.FormInfoContainer>
          <S.Text>수료 학기</S.Text>
          <S.Div>{documentData && documentData.studentInfo.completedSem}</S.Div>
        </S.FormInfoContainer>
        <S.FormInfoContainer>
          <S.Text>재/휴학 여부</S.Text>
          <S.Div>{documentData && documentData.studentInfo.schoolStatus}</S.Div>
        </S.FormInfoContainer>
        <S.FormInfoContainer>
          <S.Text>졸업 예정 연도</S.Text>
          <S.Div>
            {documentData && documentData.studentInfo.graduatedYear}
          </S.Div>
        </S.FormInfoContainer>
        <S.FormInfoContainer>
          <S.Text>전화번호</S.Text>
          <S.Div>{documentData && documentData.studentInfo.phoneNumber}</S.Div>
        </S.FormInfoContainer>
        <S.FormInfoContainer>
          <S.Text>이메일</S.Text>
          <S.Div>{documentData && documentData.studentInfo.email}</S.Div>
        </S.FormInfoContainer>

        <S.FormInfoContainer>
          <S.Text>프로그래머스 수강 여부</S.Text>
          <S.Div>{documentData && documentData.studentInfo.programmers}</S.Div>
        </S.FormInfoContainer>
        <S.ProgrammersFormInfoContainer>
          <S.Text>프로그래머스 인증 서류</S.Text>
          {documentData &&
            (documentData.studentInfo.programmers === "ENROLLED" ? (
              <S.DownloadButton
                href={documentData.studentInfo.programmersImg}
                download="프로그래머스_인증서류.zip" // 다운로드될 파일명 지정
              >
                다운로드
              </S.DownloadButton>
            ) : (
              <S.Div>해당 없음</S.Div>
            ))}
        </S.ProgrammersFormInfoContainer>
      </S.FormContainer>
    </>
  );
};

export default Form;
