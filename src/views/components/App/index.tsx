import React from 'react'
import Header from '../Header'
import Title from '../Title'
import { GlobalStyle } from './styles'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Menu from '../Menu'
import Example1 from '../Examples/Example1'
import Example2 from '../Examples/Example2'
import Example3 from '../Examples/Example3'
import Example4 from '../Examples/Example4'
import Example5 from '../Examples/Example5'
import Example6 from '../Examples/Example6'

const App = () => (
	<>
		<GlobalStyle />
		<Header>
			<Title>devForum examples</Title>
		</Header>
		<Router>
			<>
				<Route exact={true} path="/" component={Menu} />
				<Route path="/example1" component={Example1} />
				<Route path="/example2" component={Example2} />
				<Route path="/example3" component={Example3} />
				<Route path="/example4" component={Example4} />
				<Route path="/example5" component={Example5} />
				<Route path="/example6" component={Example6} />
			</>
		</Router>
	</>
)

export default App
