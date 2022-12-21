import Link from 'next/link'
import { ReactElement } from 'react'

interface NavbarProps {
  // you can add props here if needed
}

const Navbar: React.FC<NavbarProps> = (): ReactElement => {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', background: '#333333' }}>
      <Link href="/">

        <img src="/logo.svg" alt="Logo" style={{ width: 50, height: 50, margin: '0 15px' }} />

      </Link>
      <Link href="/" style={{ color: '#FFFFFF', fontSize: 18 }}>
        Home
      </Link>
      <Link
        href="/profile"
        style={{ color: '#FFFFFF', fontSize: 18, margin: '0 15px' }}>
        Profile
      </Link>
      <Link href="/gallery" style={{ color: '#FFFFFF', fontSize: 18 }}>
        Gallery
      </Link>
    </nav>
  );
}

export default Navbar
