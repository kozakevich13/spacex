import Header from "../../components/Header/Header";
import styled from 'styled-components';
import backGroundImg from "../../img/slide3.png"
import Card from "../../components/Card/Card";


const FavoritesConteiner = styled.div`
  background-image: url(${backGroundImg});
  // filter: brightness(50%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: 3;
`

const Cards = styled.div `
  width: 100%;
  height: 60vh;
  background-color: white;
  position: absolute;
  bottom: 0px
`

const Title = styled.div`
  height: 10vh;
  width: 100%;
  color: white;
  text-align: center;
  position: absolute;
  top: 220px;

  font-family: 'Syne';
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 58px;
  /* identical to box height */

  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: #FFFFFF;
  z-index: 1;
`
function Favorites() {
    return (
      <FavoritesConteiner>
       <Header/>
       <Title>Favorites</Title>
        <Cards>
          <Card/>
        </Cards>
      </FavoritesConteiner>
    );
  }
  
  export default Favorites;
  