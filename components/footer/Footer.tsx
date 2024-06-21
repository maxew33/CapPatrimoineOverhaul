import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer>

    <div>
      {/* <Image className="footer-logo-container-img"
        src={logo}
        alt="cabinet cap patrimoine" /> */}
      <div>
        <div>
          Cabinet CAP Patrimoine
        </div>
        <div>
          Conseil en gestion de patrimoine.
        </div>
      </div>
    </div>

    <Link href='/legal'>
      Mentions légales
    </Link>

    <Link href='/contact'>
      Contactez-nous
    </Link>

    <Link href="https://maxime-malfilatre.com">
    Création de Maxime Malfilâtre
    </Link>

    <div className="social-network">
      <a href="https://www.linkedin.com/in/christophe-vitu/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="link to linkedin">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>

  </footer>
  )
}
