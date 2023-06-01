import styled from "styled-components";

export const Title = styled.h1`
  font-size: 45px;
  /* font-weight: 200; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  height: 100vh;
  margin: 0 auto;
`;

export const RowBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding-left: 20px;
  width: 400px;
  height: 37.5px;
  border: 1px solid #000;
  outline: none;
  font-size: 20px;
  font-weight: 400;
  border-right: none;

`;

export const Button = styled.button`
  width: 50px;
  height: 42px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid #000;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 513px;
  margin: 0 auto;
  height: 70%;
  border: 1px solid #000;
  overflow: scroll;
  justify-content: space-between;
`;

export const Todo = styled.li`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  height: 60px;
  font-size: 25px;
  font-weight: 100;
  border-bottom: 1px solid #000;
  color: #000;
`;

export const Remove = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  color: #000;
  font-size: 15px;
  cursor: pointer;
  justify-content: center;
  /* &:hover {
    color: #000;
  } */
`;