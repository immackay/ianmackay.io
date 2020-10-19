import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { defaultDescription, skills } from 'data/config';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt={defaultDescription} />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>{skills}</p>
          <Button as={AnchorLink} href="#contact">
            Hire me!
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
