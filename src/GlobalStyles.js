import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
	margin: 0;
	padding: 0;
	box-sizing: inherit;
}

html {
	font-size: 62.5%;
	scroll-behavior: smooth;
	scroll-padding-top: 10vh;

}

body{
    font-family: "Poppins", sans-serif;
	overflow-x: hidden;
}
a{
	text-decoration:none;
}

`;
