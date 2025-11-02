// Importa o CSS da navbar
import './navbar.css';

// Importa o hook useState do React para controlar o estado do botão ativo
import { useState } from 'react';

// Define o componente Navbar
export function Navbar({ onCategoriaChange }) {
// Cria um estado chamado activeSection, com valor inicial 'comida'
const [activeSection, setActiveSection] = useState('comida');

    const handleClick = (section) => {
    setActiveSection(section);
    // Chama a função do App para atualizar a categoria
    if (onCategoriaChange) {
        onCategoriaChange(section);
    }
};

// JSX que renderiza a navbar
return (
<div>
    {/* Título centralizado */}
    <h2 className="text-center">Cardápio</h2>

    {/* Menu de navegação centralizado */}
    <nav className="nav justify-content-center">
    <ul className="nav">
        {/* Item: Comidas */}
        <li className="nav-item">
        <a
            href="#comida"
            className={`nav-link btn-style ${activeSection === 'comida' ? 'active' : ''}`}
            onClick={() => handleClick('comida')}
        >
            Comidas
        </a>
        </li>

        {/* Item: Bebidas */}
        <li className="nav-item">
        <a
            href="#bebidas"
            className={`nav-link btn-style ${activeSection === 'bebidas' ? 'active' : ''}`}
            onClick={() => handleClick('bebidas')}
        >
            Bebidas
        </a>
        </li>

        {/* Item: Sobremessas */}
        <li className="nav-item">
        <a
            href="#sobremessas"
            className={`nav-link btn-style ${activeSection === 'sobremessas' ? 'active' : ''}`}
            onClick={() => handleClick('sobremessas')}
        >
            Sobremessas
        </a>
        </li>
    </ul>
    </nav>
</div>
);
}