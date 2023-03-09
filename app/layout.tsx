import { NavBar } from '../components/nav-bar';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='scroll-smooth h-screen'>
        {children}
        <NavBar/>
      </body>
    </html>
  )
}
