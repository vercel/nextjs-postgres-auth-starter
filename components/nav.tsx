import Link from 'next/link'

interface NavigationHeaderProps {
  // you can add props here if needed
}

const NavigationHeader: React.FC<NavigationHeaderProps> = () => {
  return (
    <div style={{ background: 'linear-gradient(to right, #0062E6, #33AEFF)' }}>
      <Link href="/">
        <a style={{ marginRight: 15 }}>Home</a>
      </Link>
      <Link href="/profile">
        <a style={{ marginRight: 15 }}>Profile</a>
      </Link>
      <Link href="/gallery">
        <a>Gallery</a>
      </Link>
    </div>
  )
}

export default NavigationHeader
