import { NavBar } from './components'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <main className="bg-gray-100  w-screen">
          <section className='Navbar max-w-screen-2xl m-auto bg-white'>
            <NavBar />
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
