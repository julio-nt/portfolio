import { data } from "./data";
import * as Styled from "./styles";

const Experience = () => {
  return (
    <Styled.MainContainer>
      <Styled.Title>Experiences</Styled.Title>

      {data.info.map((item, i) => {
        return (
          <div key={i}>
            <Styled.TitleContainer>
              <p>
                {item.job} - {item.place}
              </p>
              <p>
                {item.startDate} - {item.endDate}
              </p>
            </Styled.TitleContainer>
            <Styled.ListContainer>
              {item.topics.map((topic, i) => {
                return <p key={i}>{topic}</p>;
              })}
            </Styled.ListContainer>
          </div>
        );
      })}
    </Styled.MainContainer>
  );
};

export default Experience;
