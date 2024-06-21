'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './Header.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

    const paths = [
        {
            path: '/',
            name: 'Accueil',
        },
        {
            path: '/cabinet',
            name: 'Cabinet',
        },
        {
            path: '/solutions',
            name: 'Solutions',
        },
        {
            path: '/partenaires',
            name: 'Partenaires',
        },
    ]

    const displayNav = () => {
        setMenuOpen(!menuOpen)
    }

    const hideNav = () => {
        setMenuOpen(false)
    }

    return (
        <>
        <header className={styles.header}>
            <Link
                href="/"
                className={styles.logoLink}
                aria-label={paths[0].name}
            >
                <Image
                    src="/assets/logoCapPatrimoine.webp"
                    width={50}
                    height={50}
                    alt="logo du cabinet Cap Patrimoine"
                    className={styles.logo}
                />
            </Link>

            <nav className={styles.navigation}>
                {paths.map((path, index) => (
                    <Link
                        key={`path${index}`}
                        href={path.path}
                        aria-current={pathname === path.path ? 'true' : 'false'}
                        className={`${styles.link} ${
                            pathname === path.path && styles.active
                        }`}
                        onClick={hideNav}
                    >
                        {path.name}
                    </Link>
                ))}
            </nav>

            <Link
                href="https://www.linkedin.com/in/christophe-vitu/"
                aria-label="Linkedin"
                target="_blank"
                rel="noopener"
                className={styles.social}
            >
                <FontAwesomeIcon icon={faLinkedinIn} className={styles.icon} />
            </Link>

            <button
                onClick={displayNav}
                className={`${styles.burger} ${
                    menuOpen && styles.burgerOpen
                }`}
                aria-label="menu"
            >
                <span></span>
            </button>
        </header>
        <nav className={`${styles.responsiveNav} ${
                    menuOpen && styles.openNav
                }`}>
                {paths.map((path, index) => (
                    <Link
                        key={`path${index}`}
                        href={path.path}
                        aria-current={pathname === path.path ? 'true' : 'false'}
                        className={`${styles.link} ${
                            pathname === path.path && styles.active
                        }`}
                        onClick={hideNav}
                    >
                        {path.name}
                    </Link>
                ))}
            </nav>
        </>
    )
}
