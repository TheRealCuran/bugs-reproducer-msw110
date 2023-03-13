/* eslint-env browser */
/* eslint-disable toplevel/no-toplevel-side-effect */
import { CssBaseline, ThemeProvider } from '@mui/material'
import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { MyTool } from './mytool'
import theme from './theme5'

const container = document.querySelector('#toolApp')
if (container === null) {
  throw new Error('Failed to find root element, this is not going to work')
}

const root = createRoot(container)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme={true} />
      <MyTool />
    </ThemeProvider>
  </React.StrictMode>,
)
