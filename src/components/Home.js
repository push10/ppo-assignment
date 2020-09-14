import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ResultList from './ResultList';
import { connect } from 'react-redux';
class Home extends Component {
    state = {
        searchResult: [],
        
    }
   
 

   

    render() {
        return (
            <div className='ui container Absolute-Center text-center'>
                <h1>PPO Search</h1>
                <SearchBar />
                <ResultList/>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return {results: state.result}
}
export default connect(mapStateToProps)( Home);

