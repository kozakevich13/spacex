import styled from 'styled-components';
import Card from '../Card/Card';

const H1 = styled.h1`
    width: 465px;
    height: 38px;

    font-family: 'Syne';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 38px;
   
    align-items: center;
    text-align: center;
    text-transform: uppercase;
    margin-left: 79px;
    margin-top: 80px;
    color: #1E1E1E;
    display: inline;

`;

const Arrows = styled.div`
    display: inline;
`;


function Content() {
    return (
      <>
        <H1>populars tors</H1>
        <Arrows>Arrows</Arrows>
        <Card/>
      </>
    );
  }
  
  export default Content;
  