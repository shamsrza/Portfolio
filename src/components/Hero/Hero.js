import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>

    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>Designer. Web Developer.<br/>
       Hi, I am Shams. My passion is creating beautiful <br/>and  engaging digital experiences.
        </SectionText>
        <Button onClick={() => window.location = "#projects"}>Learn More</Button>
    </LeftSection>
    
  </Section>
);

export default Hero;