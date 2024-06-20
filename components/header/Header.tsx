import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Accueil</Link>
                </li>
                <li>
                    <Link href="/cabinet">Cabinet</Link>
                </li>
                <li>
                    <Link href="/solutions">Solutions</Link>
                </li>
                <li>
                    <Link href="/partners">Partenaires</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
