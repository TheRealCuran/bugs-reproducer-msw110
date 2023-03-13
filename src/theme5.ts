import { createTheme, ThemeOptions } from '@mui/material'
import { cyan, indigo, red } from '@mui/material/colors'

// we might want to move to component definitions
const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: cyan.A400,
    },
    error: {
      main: red.A400,
    },
    background: {
      main: '#fff',
    },
  },
} as ThemeOptions)

export default theme
