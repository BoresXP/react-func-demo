import React from 'react'
import { HeaderStyled } from './styles'

interface IHeaderProps {
	children: JSX.Element
}

const Header = (props: IHeaderProps) => {
	return <HeaderStyled>{props.children}</HeaderStyled>
}

export default Header
