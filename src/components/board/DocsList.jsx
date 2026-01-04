import React, { useState, useEffect } from "react";
import * as S from "./style/DocsList.style";

const DocsList = ({ list, checkedItems, setCheckedItems }) => {
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    setIsAllChecked(list.length > 0 && checkedItems.length === list.length);
  }, [checkedItems, list]);

  const onCheckBoxAll = (e) => {
    if (!isAllChecked) {
      const allItems = list.map((item) => item.joinerId);
      setCheckedItems(allItems);
    } else {
      setCheckedItems([]);
    }
  };

  const onChangeCheckBox = (e, item) => {
    const isChecked = e.target.checked;
    setCheckedItems((prevCheckedItems) => {
      if (isChecked) {
        return [...prevCheckedItems, item.joinerId];
      } else {
        return prevCheckedItems.filter((no) => no !== item.joinerId);
      }
    });
  };

  const openDetailDocument = (joinerId) => {
    window.open(`/apply/${joinerId}`, "_blank");
  };

  return (
    <S.Table>
      <S.ContentWrap>
        <S.ContentTitle>
          <S.TableCell>
            <S.StyledInput
              type="checkbox"
              onChange={onCheckBoxAll}
              checked={isAllChecked}
            />
          </S.TableCell>
          <S.TableCell>번호</S.TableCell>
          <S.TableCell>이름</S.TableCell>
          <S.TableCell>전화번호</S.TableCell>
          <S.TableCell>학번</S.TableCell>
          <S.TableCell>트랙</S.TableCell>
          <S.TableCell>제출 시간</S.TableCell>
          <S.TableCell></S.TableCell>
        </S.ContentTitle>
        {list !== undefined ? (
          list.map((data, idx) => (
            <S.Content key={idx}>
              <S.Cell>
                <S.StyledInput
                  type="checkbox"
                  onChange={(e) => onChangeCheckBox(e, data)}
                  checked={checkedItems.includes(data.joinerId)}
                />
              </S.Cell>
              <S.Cell>{data.joinerId}</S.Cell>
              <S.Cell>{data.name}</S.Cell>
              <S.Cell>{data.phoneNum}</S.Cell>
              <S.Cell>{data.studentID}</S.Cell>
              <S.Cell>{data.track.toUpperCase()}</S.Cell>
              <S.Cell>{data.submissionTime}</S.Cell>
              <S.Cell>
                <S.Button onClick={() => openDetailDocument(data.joinerId)}>
                  <S.ButtonText>서류 상세</S.ButtonText>
                </S.Button>
              </S.Cell>
            </S.Content>
          ))
        ) : (
          <S.ImageWrap>
            <img src={`${process.env.PUBLIC_URL}/Logo.svg`} alt="loadingImg" />
          </S.ImageWrap>
        )}
      </S.ContentWrap>
    </S.Table>
  );
};

export default DocsList;
