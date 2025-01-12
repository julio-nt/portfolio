import Info from '../../components/Info/Info';
import Presentation from '../../components/Presentation/Presentation';
import * as Styled from './styles';

const Intro = () => {
  return (
    <Styled.MainContainer>
      <Presentation />
      <Info />
    </Styled.MainContainer>
  );
};

export default Intro;
