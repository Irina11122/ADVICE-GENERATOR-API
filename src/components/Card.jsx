import styled from 'styled-components'
export const Card = styled.div`
background-color: hsl(217, 19%, 24%);
padding: 40px 20px;
text-align: center;
color: white;
width: 50%;
border-radius: 20px;

 @media (max-width: 768px) {
    width: 80%; // Adjust width for smaller screens
    padding: 30px 15px; // Adjust padding for smaller screens
  }

  // Media query for screens smaller than 480px (mobile devices)
  @media (max-width: 375px) {
    width: 100%; // Adjust width further for very small screens
    padding: 20px 30px ; // Adjust padding further for very small screens
  }
` 

export const AdviceId = styled.h3`
color: hsl(150, 100%, 66%);
`