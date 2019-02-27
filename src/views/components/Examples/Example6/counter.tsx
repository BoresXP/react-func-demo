import React, { useState, useEffect } from 'react'
import { CounterDiv } from '../../../../styling/counter'

interface IProps {
	initialValue: number
}

const Counter6 = (props: IProps) => {
	const [counter, setCounter] = useState(props.initialValue)
	const [oldInitialValue, setOldInitialValue] = useState(props.initialValue)

	if (props.initialValue !== oldInitialValue) {
		setOldInitialValue(props.initialValue)
		setCounter(props.initialValue)
	}

	useEffect(() => {
		const intervalId = setInterval(() => setCounter(counter => counter + 1), 1000)
		return () => clearInterval(intervalId)
	}, [])

	return <CounterDiv>{counter}</CounterDiv>
}

export default Counter6