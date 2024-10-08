import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  OwTag
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionTitle main>
      <SectionDivider style={{ marginBottom: "20px" }} />
      Projects
    </SectionTitle>
    <SectionText>Showcase of my best work in a variety of fields.</SectionText>
    <GridContainer>
      {projects.map(
        ({ id, image, title, description, tags, source, visit, dp }) => (
          <BlogCard key={id}>
            <OwTag style={{display: dp}}><div style={{display:"flex", justifyContent:"center", alignItems:"center",width: "50px", height: "50px", background: "#0F1624"}}>Oliver Wyman brand</div></OwTag>
            <Img src={image}/>
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              {/* <Hr /> */}
            </TitleContent>
            {/* <CardInfo>{description}</CardInfo> */}
            <div>
              {/* <TitleContent>Stack</TitleContent> */}
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={source} target="_blank">
                Code
              </ExternalLinks>
              <ExternalLinks href={visit} target="_blank">
                Website
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        )
      )}
    </GridContainer>
  </Section>
);

export default Projects;
