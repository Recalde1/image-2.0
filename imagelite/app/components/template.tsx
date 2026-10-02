import React from 'react';

interface TemplateProps{
    children: React.ReactNode;

}
export const Template = ({ children }: TemplateProps) => {
    return(
        <>
        <Header />
        {children}
        <Footer />
        </>
    );
}
const Header: React.FC = () => {
    return(
        <header className="bbg-yellow-400 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center px-4">
            <h1>ImageLite</h1>
            </div>
            </header>
    );
}
const Footer: React.FC = () => {
    return(
        <footer className="bg-yellow-400 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center px-4">
            <h1>Developed by Geovanna Recalde (A mais linda)</h1>
            </div>
            </footer>
    );
}