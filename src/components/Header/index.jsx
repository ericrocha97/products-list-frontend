import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

//const Header = () => ;

export default function Header() {
    return (
        <header id="main-header">
            <a href="/">Lista de Produtos</a>
            <a href="/new" id="new">
                Adicionar novos
            </a>
        </header>
    );
}