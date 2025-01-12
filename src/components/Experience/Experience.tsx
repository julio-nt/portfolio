import { data } from './data';
import * as Styled from './styles';

const Experience = () => {
  return (
    <Styled.MainContainer>
      <Styled.Title>Experiences</Styled.Title>
      {data.map((item, i) => {
        return (
          <div key={i}>
            <p>{item.job}</p>
          </div>
        );
      })}
    </Styled.MainContainer>
  );
};

export default Experience;
