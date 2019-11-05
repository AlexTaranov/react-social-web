import React from 'react';
import NewsContainerList from './news-container';

const News = () => {
    return (
        <main className="b-news">
            <h1 className='b-news_title'>News</h1>
            <NewsContainerList />
        </main>
    );
}

export default News;