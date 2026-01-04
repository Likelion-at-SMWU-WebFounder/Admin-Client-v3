import styled from "styled-components";

export const PartText = styled.div`
  font-size: 25px;
  font-weight: 700;
  padding-bottom: 10px;
`;

export const ProgrammersFormInfoContainer = styled.div`
  display: flex;
  padding-top: 6px;
  gap: 13px;
`;

export const FormInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 0px;
  border-bottom: solid 1px #c1c1c1;
`;

export const Row = styled.div`
  display: flex;
`;

export const Text = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
`;

export const Div = styled.div`
  font-size: 15px;
  margin-left: 15px;
`;

export const DownloadButton = styled.a`
  display: inline-flex; /* 내부 텍스트 정렬에 유리 */
  align-items: center;
  justify-content: center;
  padding: 5px 10px; /* 패딩을 살짝 줄여서 콤팩트하게 변경 */
  background-color: #3b82f6; /* 조금 더 세련된 블루 톤 */
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 13px; /* 글자 크기 명시 */
  cursor: pointer;
  white-space: nowrap; /* 텍스트가 절대 줄바꿈되지 않게 고정 */
  transition: background-color 0.2s; /* 부드러운 호버 효과 */

  &:hover {
    background-color: #2563eb;
  }
`;

export const FormContainer = styled.div`
  background-color: #f0f0f0;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 5px;
`;

export const ListText = styled.div`
  font-size: 15px;
  line-height: 20px;
`;

export const TimeListCointainer = styled.div`
  margin-top: 5px;
`;
