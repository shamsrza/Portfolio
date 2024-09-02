import styled from 'styled-components';



export const Img = styled.img`
  width:100%;
  height:150px;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
display: grid;
// grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
grid-template-columns:auto auto auto auto;
padding: 1rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 230px;
  position: relative;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const OwTag = styled.div`
  // display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  // background-color: #bf80ff;
background-image: linear-gradient(to right, #bf80ff , #80bfff);
  position: absolute;
  top: 0;
  left: 0;
  font-size: 10px;
  font-weight: 700;
  // border-bottom-right-radius: 100%;
  // padding: 0;
 }
`;
export const TitleContent = styled.div`
  text-align: center;
  padding-top: 2rem;
  z-index: 20;
  width: 100%;

`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  height: 100px;
  font-size: ${(props) => props.title ? '2rem' : '1rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 5px 25px;
  color: #e4e6e7;
  font-size: 14px;
  font-style: 2rem;
  
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    //padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:#fff;
font-size: 1.6rem;
padding:1rem 1.5rem;
// background: #6b3030;
background-color: #bf80ff;
background-image: linear-gradient(to right, #bf80ff , #80bfff);
border-radius: 7px;
transition: 0.5s;
&:hover{
background-color: #a64dff;
background-image: linear-gradient(to right, #a64dff , #80bfff);

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`;

