import React, { useState, useEffect } from 'react'
import { CounterDiv } from '../../../../styling/counter'

const Example3 = () => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		const incrementProc = () => {
			global.console.log('Increment: ' + counter)
			setCounter(counter + 1)
		}
		const intervalId = setInterval(incrementProc, 1000)
		return () => clearInterval(intervalId)
	}, [])

	return <CounterDiv>{counter}</CounterDiv>
}

export default Example3
