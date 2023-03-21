import styled from 'styled-components';
import card1 from '../../img/card1.png'
import ButtonBuy from '../ButtonBuy/ButtonBuy';
import ButtonFavorites from '../ButtonFavorites/ButtonFavorites';


const MainCard = styled.div`
  width: 411px;
  height: 572px;
  border: 1px solid #D3EAFF;
  margin: 20px;
`;

const Img = styled.img`
  width: 411px;
  height: 296px;
`

const H2 = styled.h2`
  font-family: 'Syne';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  display: block;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: #1E1E1E;
`

const Description = styled.p`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #556B84;
`

function Card() {
  return (
    <MainCard>
      <Img src={card1}></Img>
      <H2>extraordinary tour</H2>
      <Description>Lorem ipsum dolor sit amet consectetur adipiscing elit</Description>
      <ButtonBuy/> <ButtonFavorites/>
    </MainCard>
  );
}

export default Card;
