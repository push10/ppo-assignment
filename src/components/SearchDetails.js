import React, { Component } from 'react';
import SearchBar from './SearchBar';
import { search } from '../actions'
import { connect } from 'react-redux'; 

class SearchDetails extends Component {
    renderDetails() {
        console.log("render details" + this.props.results);
        return this.props.results.map((content) => {
            return <div className="ui relaxed divided list">
            <div className="item">              
              <div className="content text-align-left float_left">
                <a className="header" href={content.url}>{content.title}</a> 
                <div className="description">{content.description}</div>
              </div>
            </div>            
          </div>
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className='ui container Absolute-Center text-center margin-top-0-per'>
                    <SearchBar />
                    <hr></hr>
                </div>
                <div className='ui container Absolute-Center text-center '>
                    {this.renderDetails()}
                </div>
            </React.Fragment>

        );
    }
}

const mapStateToProps = state => {
    return { results: state.search }
}
export default connect(mapStateToProps, { search })(SearchDetails);