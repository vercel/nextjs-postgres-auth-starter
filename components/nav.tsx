import Link from 'next/link'

interface NavigationHeaderProps {
  // you can add props here if needed
}

const NavigationHeader: React.FC<NavigationHeaderProps> = () => {
  return (
    <div style={{ background: 'linear-gradient(to right, #0062E6, #33AEFF)' }}>
      <Link href="/" style={{ marginRight: 15 }}>
        Home
      </Link>
      <Link href="/profile" style={{ marginRight: 15 }}>
        Profile
      </Link>
      <Link href="/gallery">
        Gallery
      </Link>
    </div>
  );
}

export default NavigationHeader
