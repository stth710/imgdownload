import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '인스타그램 이미지 다운로드',
  description: '인스타그램 이미지를 쉽게 다운로드하세요',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}



