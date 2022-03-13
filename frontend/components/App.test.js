import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import AppClass from './AppClass'
import { extensions } from 'msw/lib/types/context'

const emailInput = () => screen.getAllByPlaceholderText(/type email/i)
const submitBtn = () => screen.getByText(/submit/i)


// Write your tests here
test('sanity', () => {
  expect(true).toBe(false)
})

beforeEach(() => {
  render(<AppClass />)
})

describe('Class App', () => {
  test('Renders without crashing', () => {

  })
  test('Renders heading', () => {
    const heading = screen.queryByText(/Welcome to the GRID/i)
    expect(heading).toBeVisible()
    expect(heading).toBeInTheDocument()
  })
  test('Renders Functional Button', () => {
    const functionalBtn = screen.getByText(/functional/i)
    expect(functionalBtn).toBeVisible()
    expect(functionalBtn).toBeInTheDocument()
  })
  test('Renders Class Button', () => {
    const functionalBtn = screen.getByText(/class-based/i)
    expect(functionalBtn).toBeVisible()
    expect(functionalBtn).toBeInTheDocument()
  })
  test('Renders Up Button', () => {
    const functionalBtn = screen.getByText(/up/i)
    expect(functionalBtn).toBeVisible()
    expect(functionalBtn).toBeInTheDocument()
  })
  test('Renders Down Button', () => {
    const functionalBtn = screen.getByText(/down/i)
    expect(functionalBtn).toBeVisible()
    expect(functionalBtn).toBeInTheDocument()
  })
  test('Renders Left Button', () => {
    const functionalBtn = screen.getByText(/left/i)
    expect(functionalBtn).toBeVisible()
    expect(functionalBtn).toBeInTheDocument()
  })
  test('Renders Right Button', () => {
    const functionalBtn = screen.getByText(/right/i)
    expect(functionalBtn).toBeVisible()
    expect(functionalBtn).toBeInTheDocument()
  })
  test('Renders Reset Button', () => {
    const functionalBtn = screen.getByText(/reset/i)
    expect(functionalBtn).toBeVisible()
    expect(functionalBtn).toBeInTheDocument()
  })
  test('Renders Submit Button', () => {
    const functionalBtn = screen.getByText(/submit/i)
    expect(functionalBtn).toBeVisible()
    expect(functionalBtn).toBeInTheDocument()
  })
  test('Type in email and updates value', async () => {
    fireEvent.change(emailInput(), { target: { value: 'foo@bar.baz'} })
    fireEvent.click(submitBtn())
    await screen.findByText('foo@bar.baz')
  })
  

})