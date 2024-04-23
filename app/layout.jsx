
'use client'

import { Provider } from "react-redux";
import { store } from "../store/store";
import ScrollToTop from "@/components/common/ScrollTop";
import "../public/assets/scss/index.scss";
import { Noto_Sans_JP } from 'next/font/google';

const notoSans = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap'
})
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  return (
    <html lang='ja'>
      <head>
        <link rel="icon" href="./favicon.ico" />
      </head>
      <body className={notoSans.className}>
        <Provider store={store}>
          {children}
        </Provider>
        <ScrollToTop />
      </body>
    </html>
  )
}
