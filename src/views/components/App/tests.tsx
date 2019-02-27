import 'jest-dom/extend-expect'
import React from 'react'
import { render } from 'react-testing-library'
import App from '../App'

describe('<App />', () => {
	it('should render "Hello, World!"', () => {
		const { container } = render(
			<App />,
		)

		expect(container).toHaveTextContent('Hello, World!')
	})
})
