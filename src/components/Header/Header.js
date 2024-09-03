import Link from 'next/link';
import Image from 'next/image'
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
//import logo from '../../../public/images/logo.jpg';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (

  <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", }}>
    <Container>
   <Div1>
   
     <Link href="/">
       <a style={{ display : "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
       {/* <Image src={logo} /> */}
       <DiCssdeck size="3rem" style={{backgroundColor: "#bf80ff",backgroundImage: "linear-gradient(to right, #bf80ff , #80bfff)", borderRadius: "50%" , padding: "2px", marginRight: "5px"}}/> <Span>RShams</Span> 
         </a>
     </Link>
   </Div1>

   <Div2>
     <li>
       <Link href="#projects">
         <NavLink >Projects</NavLink>
       </Link>
     </li>
     <li>
       <Link href="#tech">
         <NavLink>Technologies</NavLink>
       </Link>
     </li>
     <li>
       <Link href="#about">
         <NavLink>About</NavLink>
       </Link>
     </li>
     <li>
       <Link href="#footer">
         <NavLink>Contact</NavLink>
       </Link>
     </li>
   </Div2>
   <Div3>
     <SocialIcons href="https://github.com/shamsrza">
       <AiFillGithub size="3rem"/>
     </SocialIcons>
     <SocialIcons href="https://www.linkedin.com/in/shams-rzayeva/">
       <AiFillLinkedin size="3rem"/>
     </SocialIcons>
     {/* <SocialIcons href="https://instagram.com">
       <AiFillInstagram size="3rem"/>
     </SocialIcons> */}
   </Div3>
 </Container>
  </div>

);

export default Header;
