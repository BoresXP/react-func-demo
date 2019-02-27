import React from 'react'
import { CounterDiv } from '../../../../styling/counter'

interface IState {
	counter: number
	intervalId: any
}

class Example1 extends React.Component<any, IState> {
	constructor(props: any) {
		super(props)
		this.state = {
			counter: 0,
			intervalId: null,
		}
	}

	public componentDidMount() {
		const intId = setInterval(() => this.setState({ counter: this.state.counter + 1 }), 1000)
		this.setState({ intervalId: intId })
	}

	public componentWillUnmount() {
		if (this.state.intervalId !== null) {
			clearInterval(this.state.intervalId)
		}
	}

	public render() {
		return <CounterDiv>{this.state.counter}</CounterDiv>
	}
}

export default Example1
