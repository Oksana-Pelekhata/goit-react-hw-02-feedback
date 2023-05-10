import styled from 'styled-components';

export const Section = styled.section`
padding: 15px 30px;
margin-top: 40px;
`

export const Title = styled.h2`
font-size: ${({theme}) => theme.fontSizes.large};
// margin: 20px;
// margin-left: auto;
magrin-right: 0 auto;

`;

export const Button = styled.button`
font-size: ${({theme}) => theme.fontSizes.medium};
margin-left: 20px;
padding: 10px;
min-width: 150px;
background-color: ${({ theme }) => theme.colors.buttonBackgroundColor};
cursor: pointer;
border: none;
border-radius: 4px;
`

export const Item = styled.li`
font-size: ${({ theme }) => theme.fontSizes.medium};
margin-bottom: 15px;
`

export const List = styled.ul`
list-style: none;

`