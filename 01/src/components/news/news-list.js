import React from 'react';
import userPhoto from '../../../src/assets/images/avatar-deffault.png';

const NewsList = (props) => {
    let getNewsItem = () => {
        if (props.news.length === 0) {
            props.setNews(); // Здесь ошибка
        }
    };

    let newsList = props.news.map(n =>
        <div className="b-news-item" key={n.id}>
            <figure className="b-news-item_thumbnail">
                <img src={n.newsImage != null ? n.newsImage : userPhoto} alt=""/>
            </figure>
            <div className="b-news-item_content">
                <div className="b-news-item_title">{n.newsTitle}</div>
                <div className="b-news-item_subtitle">{n.newsSubTitle}</div>
            </div>
            <div className="b-news-item_likes">
                {n.like ?
                    <button className="b-news-item_like" onClick={() => {
                        props.dislike(n.id)
                    }}><span className="m-inactive">dislike</span> <span className="m-active">like</span></button> :
                    <button className="b-news-item_like" onClick={() => {
                        props.like(n.id)
                    }}><span className="m-active">dislike</span> <span className="m-inactive">like</span></button>
                }
            </div>
        </div>
    );


    return (
        <section>
            {newsList}
            <button onClick={getNewsItem}>More news</button>
        </section>
    );
};

export default NewsList;
