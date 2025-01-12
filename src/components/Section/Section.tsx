import * as Styled from './styles';

type Props = {
  children: React.ReactNode;
  backgroundColor?: string;
};

const Section = ({ children, backgroundColor }: Props) => {
  return (
    <div style={backgroundColor ? { backgroundColor: backgroundColor } : {}}>
      <Styled.SectionContainer>{children}</Styled.SectionContainer>
    </div>
  );
};

export default Section;
