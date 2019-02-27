import React, { useState, useRef } from 'react'
import Counter5 from './counter'

const Example5 = () => {
	const [initialValue, setInitialValue] = useState(0)
	const inputInitial = useRef(null)

	const btnSetInitialValue = (e: React.MouseEvent<HTMLElement>) => {
		setInitialValue(inputInitial.current.value)
		e.preventDefault()
	}

	return (
		<>
			<Counter5 initialValue={initialValue} />
			<form>
				<input type="text" ref={inputInitial} />
				<button type="submit" onClick={btnSetInitialValue}>
					Установить
				</button>
			</form>
		</>
	)
}

export default Example5
