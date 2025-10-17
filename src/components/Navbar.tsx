import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '@/styles/Navbar.module.css'

const Navbar = () => {

    const pathname = usePathname();
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: '/projects' },
        { name: 'About', href: '/about' },
    ];
    
    return (
        <div className={styles.navbar}>
            <ul className={styles.buttons}>
                {navItems.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                        >
                            {item.name}
                            <div 
                                className={styles.tabDecal}
                                style={{
                                    opacity: pathname === item.href ? '100' : undefined,
                                    width: pathname === item.href ? '100%' : undefined,
                                    backgroundColor: pathname === item.href ? 'black' : undefined,
                                }}
                            ></div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar