import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 100 800;
  src: url(assets/fonts/Plus-Jakarta-Sans-Variable.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
body {
    margin: 0;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
}

html{
	--color-orange: hsl(13, 100%, 64%, 1);
	--color-pink: hsl(322, 87%, 55%, 1);
	--color-deeppink: hsla(341, 92%, 62%, 1);
	--color-deep-blue: hsl(237, 100%, 64%, 1);
	--color-darkest-blue: hsla(234, 53%, 16%, 1);
	--color-light-blue: hsla(234, 25%, 52%, 1);
	--color-lightest-blue: hsla(233, 10%, 56%, 1);
	--color-white-overlay: hsla(0, 0%, 100%, 0.5);
	
	--color-white: hsla(0,0%,100%, 1);

	--primary-gradient: linear-gradient(180deg, var(--color-orange) 0%, var(--color-pink) 100%);
	--secondary-gradient: linear-gradient(180deg, var(--color-deep-blue) -54.32%, var(--color-pink) 100%);
}


`;

export default GlobalStyles;
