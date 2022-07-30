import "@/styles/globals.css";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp