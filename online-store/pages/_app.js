import React from 'react'
import Layout from '../components/layout'
import '/styles/globals.css'
import { StateContext } from '../context/StateContext'
import { Toast, Toaster } from 'react-hot-toast'
function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}

export default App