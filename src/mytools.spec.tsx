import '@testing-library/jest-dom'
import { act, render, screen, waitFor } from '@testing-library/react'
import 'isomorphic-fetch' // needed for Request, Response
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import * as React from 'react'
import { MyTool } from './mytool'

const server = setupServer(
  rest.get('https://example.com/api/session', async (_req, res, ctx) => {
    // catastrophic failure on the server
    return res(
      ctx.status(500),
      ctx.text('Internal Server Error – invalid reply (get)'),
    )
  }),
)

const fetchSpy = jest.spyOn(global, 'fetch')

async function waitForFetchCalls(
  spy: jest.SpyInstance,
  timesCalled = 1,
  waitTime = 5,
) {
  jest.advanceTimersByTime(waitTime)
  await waitFor(() => expect(spy).toHaveBeenCalledTimes(timesCalled))
}

beforeAll(() => {
  server.listen()
})
afterEach(() => {
  server.resetHandlers()
  jest.clearAllMocks()
})
afterAll(() => {
  server.close()
})

describe('msw reproduce bug', () => {
  test('error case', async () => {
    jest.useFakeTimers()
    const { rerender } = render(<MyTool />)
    expect(screen.queryAllByRole('alert')).toHaveLength(0)

    await act(() => waitForFetchCalls(fetchSpy))
    rerender(<MyTool />)

    expect(screen.queryAllByRole('alert')).toHaveLength(1)
    expect(screen.getByRole('alert')).toHaveTextContent(
      'An error occured while fetching your session data',
    )
  })
})
