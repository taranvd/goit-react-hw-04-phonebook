import { SectionStyled, SectionTitle } from './Section.style';
export const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionStyled>
  );
};
