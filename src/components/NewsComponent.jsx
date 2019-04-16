import React from 'react';
import '../css/App.scss';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { connect } from 'react-redux';
import { simNewsData } from '../backupData/index'; 
import { get_news } from '../actions/index';

const mapStateToProps = state => {
    return {
        fullData: state
    };
};

const mapDispatchToProps = 
    {
        fire_get_news: get_news,
    };  

const article = (obj, index) => <div key={index} className="Article">
        <a href={obj.url}>
            <h4>{obj.title}</h4>
            <div><img src={obj.urlToImage} alt="Pic"/></div>
            <p href={obj.url} className="Article-Text">{obj.description}...(click for more)</p>
        </a>        
    </div>;


class NewsComponent extends React.Component {
    state = {
        newsApiFetchCount : 0
    };

    async fetchNews() {
        
        const site = 'https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=be6a84f3238641c2b3eb13361beffc88';
        try {  
            let res = await fetch(site);
            let json = await res.json();
            if (json.status === 'ok') {
                const { articles } = json; 
                await this.props.fire_get_news(articles); 
                await this.setState({ newsApiFetchCount: this.state.newsApiFetchCount++});
            } else {
                this.props.fire_get_news(simNewsData);
                await this.setState({ newsApiFetchCount: this.state.newsApiFetchCount++});
                alert('Historic News Data Loaded - Status'); 
            }
        } catch (err) {
            this.props.fire_get_news(simNewsData);
            await this.setState({ newsApiFetchCount: this.state.newsApiFetchCount++});
            alert('Historic News Data Loaded - Link'); 
        }
            
    }

    async componentDidMount() {
        await this.fetchNews();
        // await this.fetchCoinData();
    }

    
    render() {        
        return (
            <div>
                <div>
                    {(this.props.fullData.coinReducer.news.length === 0) ?
                    <div>
                        <SkeletonTheme color='gray' highlightColor='white'>
                            <p><Skeleton count={3} height={20}/></p>
                        </SkeletonTheme>
                    </div>
                    :
                    this.props.fullData.coinReducer.news.map((singleNews, index) => 
                        article(singleNews, index))   
                    }
                </div>
            </div>       
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewsComponent);

