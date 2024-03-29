import './globals.css'
import { Roboto_Flex } from 'next/font/google'
import {Navbar} from './component/navbar'
const roboto = Roboto_Flex({ subsets: ['latin'] })
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Bunk pe',
  description: 'Digital Marketing agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={roboto.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 mt-10 border-t border-gray-100 dark:border-gray-800"><div className="text-sm text-center">Copyright © 2023 Bunk pe. All rights reserved.</div></div>
        <Analytics />
      </body>
    </html>
  )
}
