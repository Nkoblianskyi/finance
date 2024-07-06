import Link from 'next/link';

export const Header: React.FC = () => {
    const navigationLinks = [
        { href: '/', label: 'Industries' },
        { href: '/services', label: 'Services' },
        { href: '/insights', label: 'Featured Insights' },
        { href: '/contact', label: 'Contact Us' },
        { href: '/about', label: 'About Us' },
        { href: '/careers', label: 'Careers' },
    ];

    return (
        <header className="header container">
            <div className="header-logo">
                <Link href='/'>
                    Logo
                </Link>
            </div>
            <nav className="header-nav">
                <ul className="header-list">
                {navigationLinks.map((link, index) => (
                    <li className="header-link" key={index}>
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                ))}
                </ul>
            </nav>
        </header>
    );
    };
