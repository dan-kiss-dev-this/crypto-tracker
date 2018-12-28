import React from 'react';
import logo from './logo.svg';
import './App.css';
import Skeleton from 'react-loading-skeleton';

import { connect } from 'react-redux'; //we import the connect method from react-redux

const mapStateToProps = state => {
    return {
        fullData: state
    };
};


class NewsComponent extends React.Component {

    render() {
        console.log(56,'state', this.state,' props', this.props.fullData.news);
        // if (this.props.fullData.news !== null) {
        //     this.setState({loaded : true});
        // }
        return (
            <div>
                {this.props.fullData.news === null ? 
                <h1><Skeleton count={11} height={70}/></h1> 
                :
                <ul>{this.props.fullData.news.map((singleNews) => 
                    <li>{singleNews.title}</li>
                )}</ul>}
                
                
                

            </div>
                 
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(NewsComponent);

