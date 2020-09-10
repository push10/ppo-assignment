import React, { Component } from 'react'
import './SearchBar.css'
class SearchBar extends Component {
    state = {
        term: ''
    };

    onInputChange = (e) => {
        this.setState(
            { term: e.target.value }
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
                        <button className="positive ui button " onClick={this.onFormSubmit} style={left_margin} >Search</button>
                    </div>
                   
                </form>
            </div>
        )
    }
}

export default SearchBar;