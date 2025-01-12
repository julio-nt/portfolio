import { data } from './data';
import * as Styled from './styles';

const Presentation = () => {
  return (
    <Styled.MainContainer>
      <Styled.Text>{data.title}</Styled.Text>
      <Styled.Text>{data.subtitle}</Styled.Text>
      <Styled.TopicListContainer>
        {data.topics.map((topic, i) => {
          return (
            <Styled.TopicContainer key={i}>
              <Styled.TopicIcon icon={topic.icon} width={80} />
              <Styled.TopicText>{topic.description}</Styled.TopicText>
            </Styled.TopicContainer>
          );
        })}
      </Styled.TopicListContainer>
    </Styled.MainContainer>
  );
};

export default Presentation;
