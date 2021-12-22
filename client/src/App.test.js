import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders page', () => {
  const { getByText } = render(<App />)
  const breadpunTitle = getByText(/Bread Puns/i)
  expect(breadpunTitle).toBeInTheDocument()
})
