

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
        <header className="header">
        <div className="logo">
            Logo
        </div>
        <nav className="navigation">
            <ul className="navigation-list">
            {navigationLinks.map((link, index) => (
                <li key={index}>
                    <a>{link.label}</a>
                </li>
            ))}
            </ul>
        </nav>
        </header>
    );
    };
