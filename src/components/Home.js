import React, { Component } from 'react';
import SearchBar from './SearchBar';

class Home extends Component {
    state = {
        vedios: [],
        selectedVideo: null
    }
    onTermSubmit = async term => {
        
    }

    onVideoSelect = video => {
        this.setState({
            selectedVideo: video
        })
    }
constructor(props) {
    console.log("in side constructor");
    super(props);
    
}

    render() {
        return (
            <div className='ui container Absolute-Center text-center'>
                <h1>PPO Search</h1>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                
            </div>
        )
    }
}

export default Home;
