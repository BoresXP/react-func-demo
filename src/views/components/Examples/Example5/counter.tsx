import React, { useState, useEffect } from 'react'
import { CounterDiv } from '../../../../styling/counter'

interface IProps {
	initialValue: number
}

const Counter5 = (props: IProps) => {
	const [counter, setCounter] = useState(props.initialValue)

	useEffect(() => {
		const intervalId = setInterval(() => setCounter(counter => counter + 1), 1000)
		return () => clearInterval(intervalId)
	}, [])

	return <CounterDiv>{counter}</CounterDiv>
}

export default Counter5