import React, { Component } from 'react'; 
import './SearchBar.css';
import { search } from '../actions'
import { connect } from 'react-redux';
class SearchBar extends Component {
    state = {
        term: ''
    };

    
    onInputChange = async (e) => {
        this.setState(
            { term: e.target.value }
        )

    }
    onSearch = async () => {
        this.props.search(this.state.term, true);
    }

    onFormSubmit = event => {
        event.preventDefault();
    }

    renderList() {
        console.log("render list:" + this.props.results);
        if(this.props.results){
            return this.props.results.map((content) => {
                return <div className='item border_none' key={content.title}>
                    
                    <div className='content' onClick={(content) => this.props.selectSong(content)}>
                        {content.title}
                    </div>
                </div>
            })
        }
        
    }

    render() {
        const inputWidth = {
            width: '80%'
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
const mapStateToProps = state => {
    return { results: state.search }
}
export default connect(mapStateToProps, { search })(SearchBar);