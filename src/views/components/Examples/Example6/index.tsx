import React, { useState, useRef } from 'react'
import Counter6 from './counter'

const Example6 = () => {
	const [initialValue, setInitialValue] = useState(0)
	const inputInitial = useRef(null)

	const btnSetInitialValue = (e: React.MouseEvent<HTMLElement>) => {
		setInitialValue(parseInt(inputInitial.current.value, 10))
		e.preventDefault()
	}

	return (
		<>
			<Counter6 initialValue={initialValue} />
			<form>
				<input type="text" ref={inputInitial} />
				<button type="submit" onClick={btnSetInitialValue}>
					Установить
				</button>
			</form>
		</>
	)
}

export default Example6
