import Link from "next/link"

export const Footer = () => {
    const navigationLinks = [
        { href: '/', label: 'Industries' },
        { href: '/services', label: 'Services' },
        { href: '/insights', label: 'Featured Insights' },
        { href: '/contact', label: 'Contact Us' },
        { href: '/about', label: 'About Us' },
        { href: '/careers', label: 'Careers' },
    ];

    return (
        <>
        <div className="footer">
            <div className="footer-logo">
                <Link href='/' className="footer-logo-link">
                    Logo
                </Link>
                <p className="footer-text">
                    Vivamus arcu felis bibendum ut tristique et. Diam in arcu cursus euismod quis. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum.
                    Vivamus arcu felis bibendum ut tristique et. Diam in arcu cursus euismod quis. Vivamus arcu felis bibendum ut tristique et egestas quis ipsum.
                    Vivamus arcu felis bibendum ut tristique et.
                </p>
            </div>
            <nav className="footer-nav">
                <ul className="footer-nav-list">
                    {navigationLinks.map((link, index) => (
                        <li className="footer-link" key={index}>
                            <Link href={link.href}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
            <div className="footer-bottom">
                <p className="footer-bottom-text">All Rights Reserved</p>
                <p  className="footer-bottom-text">© 2023 Corporate Company</p>
            </div>
        </>
    )
}