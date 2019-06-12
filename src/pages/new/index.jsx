import React, { Component } from "react";
import api from '../../services/api'

import './styles.css';


class New extends Component {
    render() {
        return (
            <form id="new-post">
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Titulo"
                />
                <input 
                    type="text" 
                    name="description" 
                    placeholder="Descrição"
                />
                <input 
                    type="text" 
                    name="url" 
                    placeholder="Url"
                />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default New;