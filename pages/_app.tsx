import { StyledEngineProvider } from '@mui/material'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <StyledEngineProvider injectFirst>
      <Component {...pageProps} />
  </StyledEngineProvider>
}

export default MyApp
