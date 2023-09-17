import '@/styles/globals.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <GoogleOAuthProvider clientId='2026621704-3lpdsc112d21521qng3j4ndt6k7oaraq.apps.googleusercontent.com'>
    <Component {...pageProps} />
    <Toaster />
    </GoogleOAuthProvider>
    </>
)}
