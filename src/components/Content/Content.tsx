import styled from 'styled-components';
import backGroundImage from '../../img/baner2.jpg'



const ContentContainer = styled.div`
  background-image: url(${backGroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  background-color: red;
`;

function Content() {
  return (
    <ContentContainer>
      Content
    </ContentContainer>
  );
}

export default Content;
