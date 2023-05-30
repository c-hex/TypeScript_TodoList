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
  height: 20%;
`;

export const Input = styled.input`
  padding-left: 20px;
  width: 400px;
  height: 37.5px;
  border: 1px solid #000;
  outline: none;
  font-size: 20px;
  font-weight: 400;
`;

export const Button = styled.button`
  width: 130px;
  height: 41px;
  border: none;
  font-size: 18px;
  font-weight: 600;
  border: 1px solid #000;
  border-left: none;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 513px;
  margin: 0 auto;
  height: 80%;
  border: 1px solid #000;
`;

export const Todo = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  justify-content: center;
  color: #000;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    color: #000;
  }
`;