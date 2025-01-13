import { data } from "./data";
import * as Styled from "./styles";

const Experience = () => {
  return (
    <Styled.MainContainer>
      <Styled.Title>Experiences</Styled.Title>
      {data.map((item, i) => {
        return (
          <div key={i}>
            <div>
              <p>
                {item.job} - {item.place}
              </p>
              <p>
                {item.startDate} - {item.endDate}
              </p>
            </div>
          </div>
        );
      })}
    </Styled.MainContainer>
  );
};

export default Experience;
