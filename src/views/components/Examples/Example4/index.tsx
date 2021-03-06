import React, { useState, useEffect } from 'react'
import { CounterDiv } from '../../../../styling/counter'

const Example4 = () => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		const intervalId = setInterval(() => setCounter(counter => counter + 1), 1000)
		return () => clearInterval(intervalId)
	}, [])

	return <CounterDiv>{counter}</CounterDiv>
}

export default Example4
