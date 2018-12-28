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

const article = (obj, index) => <div key={index} className="Article">
        <a href={obj.url}>
            <h4>{obj.title}</h4>
            <div><img src={obj.urlToImage} alt="Pic"/></div>
            <p href={obj.url} className="Article-Text">{obj.description}...(click for more)</p>
        </a>        
    </div>;


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
                <div>
                    {this.props.fullData.news.map((singleNews, index) => 
                        article(singleNews, index)
                    )}
                  

                </div>
                }
                
                

            </div>
                 
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(NewsComponent);

