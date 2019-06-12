import React, { Component } from "react";
import api from '../../services/api'

import './styles.css';


class New extends Component {
    state = {
        title: '',
        description: '',
        url: '',
    };

    handleSubmit = async e => {
        e.preventDefault();
        const data = this.state
        await api.post('products', {
            title: data.title,
            description: data.description,
            url: data.url
        })
        this.props.history.push('/');
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        return (
            <form id="new-post" onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Titulo"
                    onChange={this.handleChange}
                    value={this.state.title}
                />
                <input 
                    type="text" 
                    name="description" 
                    placeholder="Descrição"
                    onChange={this.handleChange}
                    value={this.state.description}
                />
                <input 
                    type="text" 
                    name="url" 
                    placeholder="Url"
                    onChange={this.handleChange}
                    value={this.state.url}
                />
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default New;