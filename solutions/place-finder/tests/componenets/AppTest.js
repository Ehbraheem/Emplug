import React from 'react'
import { mount } from 'enzyme'

import App from '../../src/App'


describe('App', () => {

	let mountedApp;

	const app = () => if (!mountedApp) mount(<App />);

	it("renders all divs", () => {
		const divs = app().find('div')
		expect(divs).toNotBeNull()
		expect(divs.length).toBeTruthy()
		expect(divs.length).toBeGreaterThan(0)
	})
}

beforeEach(() => mountedApp = undefined)


)