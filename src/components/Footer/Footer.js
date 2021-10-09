import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Footer = () => {
  return (
   <FooterWrapper id= "footer">
     <LinkList>
        <LinkColumn>
        <LinkTitle>Mobile</LinkTitle>
        <LinkItem href="tel:0048883906552">+48 883 906 552 </LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Email</LinkTitle>
        <LinkItem href="mailto:rzsams@hotmail.com">rzsams@hotmail.com </LinkItem>
        </LinkColumn>
        <LinkColumn>
        <LinkTitle>Social Network</LinkTitle>
      <SocialContainer>
        <SocialIcons href="https://github.com/shamsrza">
       <AiFillGithub size="3rem"/>
     </SocialIcons>
     <SocialIcons href="https://www.linkedin.com/in/shams-rzayeva/">
       <AiFillLinkedin size="3rem"/>
     </SocialIcons>
     <SocialIcons href="https://instagram.com">
       <AiFillInstagram size="3rem"/>
     </SocialIcons>
      </SocialContainer>
        </LinkColumn>
     </LinkList>
   </FooterWrapper>
  );
};

export default Footer;
