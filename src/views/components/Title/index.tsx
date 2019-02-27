import React from 'react'
import { TitleStyled } from './styles'

const Title = (props: any) => {
	const {scopes, ...otherProps} = props
	return (
		<TitleStyled {...otherProps} />
	)
}

export default Title
