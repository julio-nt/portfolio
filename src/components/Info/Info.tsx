import { data } from './data';
import * as Styled from './styles';

const Info = () => {
  return (
    <Styled.InfoContainer>
      <Styled.InfoImage src={data.image} width={300} height={400} />
      <Styled.InfoInfoContainer>
        <Styled.CountryIcon icon={data.countryIcon} />
        <Styled.InfoText>{data.title}</Styled.InfoText>
        <Styled.InfoText>{data.phone}</Styled.InfoText>
        <Styled.InfoText>{data.email}</Styled.InfoText>
        <Styled.InfoText>{data.github}</Styled.InfoText>
        <Styled.InfoText>{data.linkedin}</Styled.InfoText>
      </Styled.InfoInfoContainer>
    </Styled.InfoContainer>
  );
};

export default Info;
