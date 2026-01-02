import styled from "styled-components";

export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupContent = styled.div`
  position: relative;
  color: black;
  background-color: white;
  border-radius: 10px;
  width: 1000px;
  height: 750px;
  padding: 50px;
`;

export const HopeTimeContainer = styled.div`
  position: absolute;
  top: 127px;
  font-size: 30px;
  margin-top: 0px;
`;

export const Bold = styled.span`
  font-weight: bolder;
`;

export const Select = styled.select`
  padding: 10px;
  margin-right: 30px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 200px;
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  position: absolute;
  right: 16px;
  top: 30px;
  font-size: 55px;
  border-radius: 5px;
  border: none;
  background: none;
  color: black;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  position: absolute;
  bottom: 27px;
  right: 16px;
  border: none;
  margin-right: 20px;
  border-radius: 5px;
  background: #9fb9fd;
  width: 80px;
  height: 44px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-size: 28px;
  font-weight: 700;
  line-height: 38px;
  letter-spacing: -0.0505em;
  text-align: center;

  box-sizing: content-box;
`;

// const UlDiv = styled.ul`
//   overflow-y: auto;
//   max-height: 200px;
//   &::-webkit-scrollbar {
//     width: 8px;
//     height: 8px;
//     border-radius: 6px;
//     background: rgba(255, 255, 255, 0.4);
//   }
//   &::-webkit-scrollbar-thumb {
//     background-color: rgba(0, 0, 0, 0.3);
//     border-radius: 6px;
//   }
// `;

// const Ul = styled.ul`
//   margin-left: 30px;
//   max-height: 50%;
// `;

// const TimeDiv = styled.li`
//   font-size: 25px;
//   list-style-type: disc;
// `;
