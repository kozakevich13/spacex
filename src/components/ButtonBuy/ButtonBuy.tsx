import styled from 'styled-components';


const Button = styled.button`
  padding-top: 1%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 268px;
  height: 53px;
  left: 1197px;
  top: 13px;
  margin-right: 16px;
  background: #D3EAFF;
  display: inline;

  font-family: 'Syne';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #000000;

  &:hover {
    background-color: #0069d9;
  }
`;



function ButtonBuy() {
    return (
      <Button>BUY</Button>
    );
  }
  
  export default ButtonBuy;
  