import React, { Component } from 'react';
import api from '../apis/api';
import './SearchBar.css'
class SearchBar extends Component {
    state = {
        term : '',
        searchResult: ''
    };

    onInputChange = async(e) => {
        this.setState(
            { term:e.target.value}
        )
    }
    onSearch = async() => {
        const response = await api.get(`/getContent/${this.state.term}`);
        this.setState(
            { searchResult: response.data.items, selectedContent: null }
        )  
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
   
    render() {
        const inputWidth = {
            width : '80%'
        }
        const left_margin = {
            marginLeft: '10px'
        }
        return (
            <div className="search-bar ui">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="feild">                        
                        <input type="text" className='width_85_per' style={inputWidth} value={this.state.term} onChange={this.onInputChange} ></input>                    
                        <button className="positive ui button " onClick={this.onSearch} style={left_margin} >Search</button>
                    </div>
                   
                </form>
            </div>
        )
    }
}

export default SearchBar;