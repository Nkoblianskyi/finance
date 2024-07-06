import { Footer } from '@/components/footer/footer';
import { Header } from '../components/header';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="container">
            <Header/>
                <main>{children}</main>
            <Footer/>
        </div>
    )
}