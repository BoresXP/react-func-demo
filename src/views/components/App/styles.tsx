import { createGlobalStyle } from 'styled-components'
import DodoMedium from '../../../styling/DodoMedium.woff2'

export const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Dodo Medium';
		src: url(${DodoMedium}) format('woff2');
	}
`
