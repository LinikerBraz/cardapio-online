import './Header.css'

export function Header() {
    return (
    <header className="header">
        <div className="container">
        {/* Logo + Nome */}
        <a href="#inicio" className="logo-link">
            <img src="/public/123.png" alt="Logo Cafeteria MP" className="logo-img" />
            <span className="logo-text">Cafeteria MP</span>
        </a>

        {/* Ícones sociais */}
        <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="bi bi-whatsapp"></i>
            </a>
        </div>
        </div>
    </header>
    );
}