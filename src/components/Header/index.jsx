import React from 'react';


import './styles.css';

//const Header = () => ;

export default function Header() {
    return (
        <header id="main-header">
            <div className="header-content">
                <a href="/">Lista de Produtos</a>
                <a href="/new" id="new">
                    Adicionar novos
                </a>
            </div>
        </header>
    );
}