import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { SiFigma } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


const Technologies = () =>  (
  <Section id="tech" style={{marginTop: "100px"}}>
    <SectionTitle>
    <SectionDivider style={{marginBottom: "20px"}}/>
      Technologies</SectionTitle>
    <SectionText>
    I've worked with a range of technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3.5rem" style={{marginBottom: "10px"}} />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            {/* Experience with <br/> */}
            <ul>
              <li> HTML</li>
              <li> CSS3/SASS</li>
              <li> JQuery</li>
              <li> JavaScript</li>
              <li> React.js</li>
              <li> React Hooks</li>
              <li> Redux</li>
              <li> Material UI</li>
              <li> Bootstrap</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaDatabase size="2.5rem" style={{marginBottom: "10px"}}/>
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            {/* Experience with <br/> */}
            <ul>
              <li> ASP.NET WebAPI </li>
              <li> ASP.NET MVC</li>
              <li> C#</li>
              <li> SQL</li>
              <li> Node.js</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiFigma size="2.5rem" style={{marginBottom: "10px"}}/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            {/* Experience with <br/> */}
            <ul>
              <li>Figma</li>
            </ul>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
