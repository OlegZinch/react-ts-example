interface HeaderProps {
  image: {
    src: string
    alt: string
  }
}

const Header = ({ image }: HeaderProps) => {
  return (
    <header>
      <img {...image} />
    </header>
  )
}

export default Header
