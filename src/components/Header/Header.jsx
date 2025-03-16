import Link from "next/link";
import "./Header.css"

function Header() {
  return (
    <>
      <header class="header">
        <img src=".\assets\logo.png" alt="Logo da empresa" className="logo" />
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><a href="#info">Informações</a></li>
            <li><Link href="/Planos">Planos</Link></li>
            <li><a href="#feedback">Feedback</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header;