import Link from 'next/link'
import { ReactElement } from 'react'

interface NavbarProps {
  // you can add props here if needed
}

const Navbar: React.FC<NavbarProps> = (): ReactElement => {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', background: '#333333' }}>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="Logo" style={{ width: 50, height: 50, margin: '0 15px' }} />
        </a>
      </Link>
      <Link href="/">
        <a style={{ color: '#FFFFFF', fontSize: 18 }}>Home</a>
      </Link>
      <Link href="/profile">
        <a style={{ color: '#FFFFFF', fontSize: 18, margin: '0 15px' }}>Profile</a>
      </Link>
      <Link href="/gallery">
        <a style={{ color: '#FFFFFF', fontSize: 18 }}>Gallery</a>
      </Link>
    </nav>
  )
}

export default Navbar
