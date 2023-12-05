import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// interface Params {
//   lang?: string | undefined
// }

export default function RootLayout({
  children, params
}: {
  children: React.ReactNode,
  params
}) {
  console.log('params', params)
  return (
    // <html lang="en">
    <html lang={params}>
      {/* <body className={inter.className}>{children}</body> */}
      <body >{children}</body>
    </html>
  )
}