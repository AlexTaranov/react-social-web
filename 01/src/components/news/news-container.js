import NewsList from './news-list';
import {connect} from "react-redux";
import {newLikeAC, newUnlikeAC, setNewsAC} from "../../redux/reducer-news";

let newsStateToProps = (state) => {
    return {
        news: state.newsPage.newsData
    }
};

let newsDispatchToProps = (dispatch) => {
    return {
        like: (id) => {
            dispatch(newLikeAC(id));
        },
        dislike: (id) => {
            dispatch(newUnlikeAC(id));
        },
        setNews: (news) => {
            dispatch(setNewsAC(news));
        }
    }
};


export default connect(newsStateToProps, newsDispatchToProps)(NewsList);
