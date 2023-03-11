import styled from 'styled-components';

import exampleImg from 'assets/courseImg/example.png';

import { GradientButton } from 'styled';

const TEXT_LINE_HEIGHT = 30;

export const SectionCart = styled.section`
margin: 102px 556px 338px 138px;
height: 2237px;
width: 1903px;
`;

export const CourseCart = styled.div`
position: relative;
  width: 455px;
  height: 600px;
  flex-grow: 1;
  justify-content: center;
  justify-items: center;
  box-shadow: 2px 1px 13px 11px lightskyblue;
`;
export const Img = styled.img
  . attrs(() => ({
    src: exampleImg,
    alt: 'img'
  }))`
  
width: 325px;
height: 220px;
display: block;
margin: 0 auto;
`;
export const DateBlock = styled.div`
position: absolute;
width: 132px;
height: 132px;
display: block;
background: linear-gradient(90deg, #6FBCFE 0%, #998DFF 51%, #6FBCFE 100%);
top: 42px;
`;
export const TextBlock = styled.div`
width: 455px;
height: 241px;
display: block;
background: linear-gradient(90deg, #6FBCFE 0%, #998DFF 51%, #6FBCFE 100%);
margin-bottom: 5px;

`;
export const Text = styled.p`
  align-items: center;
  color: black;
  line-height: ${TEXT_LINE_HEIGHT}px;
  word-wrap: break-all;
  margin: 25px auto;
  padding: 0 24px;
`;
export const H2 = styled.h2`
padding-left: 8px;
  align-items: center;
  color: ${({ theme }) => theme.colors.textWithBackground};
  line-height: ${TEXT_LINE_HEIGHT}px;
  word-wrap: break-all;
  margin-top: 45px; 
`;
export const H3 = styled.h3`
position: absolute;
padding-left: 300px;
  align-items: center;
  color: black;
  line-height: ${TEXT_LINE_HEIGHT}px;
  word-wrap: break-all;
  bottom: 15px;
`;
export const GradientButtonWithMargin = styled(GradientButton)`
  margin: ${({ theme }) => theme.spaces.m}px 0 0 6px;
`;
