import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectContent } from '../actions';

class ResultList extends Component {

   
    renderList() {
        console.log("render list"+this.props.results);
        return this.props.results.map((content) => {
            return <div className='item height_40_px width-80-pc margin-left-6pc' key={content.id}>
                
                <div className='content' onClick={(content)=>{selectContent(content)}}>
                    {content.title}
                </div>
            </div>
        })
    }
    render() {
        return (
            <div className='ui divided list'>
                
                {this.renderList()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return { results: state.search };
}
export default connect(mapStateToProps, { selectContent })(ResultList);