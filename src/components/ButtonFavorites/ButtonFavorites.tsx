import styled from 'styled-components';
import icon_heart from '../../img/Heart.png'


const Button = styled.button`
  justify-content: center;
  align-items: center;
  padding: 12px 0px;
  gap: 10px;
  cursor: pointer;
  width: 53px;
  height: 53px;
  left: 1197px;
  top: 13px;
  background: #ECECEC;;

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

const Img = styled.img`
  wight: 24px;
  height: 24px;
`

function ButtonFavorites() {
    return (
      <Button className="App">
        <Img src={icon_heart} alt='icon_heart'></Img>
      </Button>
    );
  }
  
  export default ButtonFavorites;
  