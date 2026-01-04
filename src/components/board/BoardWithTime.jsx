import React, { useState, useEffect } from "react";
import TimePopup from "../interview/TimePopup";
import * as S from "./style/DocsList.style";
import * as B from "../button/Button.style";

const BoardWithTime = ({
  list,
  checkedItems,
  setCheckedItems,
  showPopup,
  setShowPopup,
}) => {
  const [selectedItemId, setSelectedItemId] = useState(null);
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
          <S.TableCell>지원트랙</S.TableCell>
          <S.TableCell>면접 시간</S.TableCell>
          <S.TableCell></S.TableCell>
        </S.ContentTitle>
        {list !== undefined ? (
          list.map((data, idx) => (
            <S.Content key={idx}>
              <S.Cell>
                {!showPopup && (
                  <S.StyledInput
                    type="checkbox"
                    onChange={(e) => onChangeCheckBox(e, data)}
                    checked={checkedItems.includes(data.joinerId)}
                  />
                )}
              </S.Cell>
              <S.Cell>{data.joinerId}</S.Cell>
              <S.Cell>{data.name}</S.Cell>
              <S.Cell>{data.phoneNum}</S.Cell>
              <S.Cell>{data.studentID}</S.Cell>
              <S.Cell>{data.track.toUpperCase()}</S.Cell>
              <S.Cell>{data.interviewTime ? data.interviewTime : "-"}</S.Cell>

              {showPopup && selectedItemId === data.joinerId && (
                <TimePopup
                  track={data.track.toUpperCase()}
                  aname={data.name}
                  joinerId={data.joinerId}
                  onClose={() => setShowPopup(false)}
                />
              )}
              <B.Button
                color="#d9d9d9"
                onClick={() => {
                  setShowPopup(true);
                  setSelectedItemId(data.joinerId);
                }}
              >
                <B.ButtonText>면접 시간 입력</B.ButtonText>
              </B.Button>
            </S.Content>
          ))
        ) : (
          <div>
            <img src={`${process.env.PUBLIC_URL}/Logo.svg`} alt="loadingImg" />
          </div>
        )}
      </S.ContentWrap>
    </S.Table>
  );
};

export default BoardWithTime;
