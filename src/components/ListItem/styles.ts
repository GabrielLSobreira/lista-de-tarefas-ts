import styled from 'styled-components';

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(
  ({ done }: ContainerProps) =>
    `
  display: flex;
  background-color: #20212c;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
 
  div{
    display: flex;
    align-items: center;
  }
  input {
    width: 25px;
    height: 25px;
    margin-right: 5px;
    cursor : pointer;
  }

  label {
    color: #ccc;
    text-decoration: ${done ? 'line-through' : 'initial'}
  }
  button{
    width: 25px;
    height: 25px;
    font-size : 1rem;
    
  }
`,
);
