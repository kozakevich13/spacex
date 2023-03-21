import styled from 'styled-components';
import icon_heart from '../../img/Heart.png'


const ButtonFav = styled.button`
  padding: 0px;
  cursor: pointer;
  width: 53px;
  height: 53px;
  margin-right: 12px;
  background: #ECECEC;

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
  position: relative;
  top: 3px;
`

function ButtonFavorites() {
    return (
      <ButtonFav>
        <Img src={icon_heart} alt='icon_heart'></Img>
      </ButtonFav>
    );
  }
  
  export default ButtonFavorites;
  