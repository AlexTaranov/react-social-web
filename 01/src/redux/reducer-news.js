const LIKE = 'LIKE';
const DISLIKE = 'DISLIKE';
const SET_NEWS = 'SET_NEWS';

let stateInitial = {
  newsData: [
      {
          id: 1,
          newsImage: 'https://bcn-a.akamaihd.net/img/news_01.12_litecoin.jpg',
          newsTitle: 'News Title',
          newsSubTitle: 'News SubTitle',
          like: true,
      },
      {
          id: 2,
          newsImage: 'https://bcn-a.akamaihd.net/img/news_01.12_litecoin.jpg',
          newsTitle: 'News Title 1',
          newsSubTitle: 'News SubTitle 1',
          like: true,
      },
      {
          id: 3,
          newsImage: 'https://bcn-a.akamaihd.net/img/news_01.12_litecoin.jpg',
          newsTitle: 'News Title 2',
          newsSubTitle: 'News SubTitle 2',
          like: true,
      },
      {
          id: 4,
          newsImage: 'https://bcn-a.akamaihd.net/img/news_01.12_litecoin.jpg',
          newsTitle: 'News Title 3',
          newsSubTitle: 'News SubTitle 3',
          like: true,
      },
  ]
};

const reducerNews = (state = stateInitial, action) => {
    switch (action.type) {
        case LIKE:
            return {
                ...state,
                newsData: state.newsData.map(n => {
                    if (n.id === action.id) {
                        return {...n, like: true};
                    }
                    return n;
                })
            };
        case DISLIKE:
            return {
                ...state,
                newsData: state.newsData.map(n => {
                   if (n.id === action.id) {
                       return {...n, like: false};
                   }
                   return n;
                })
            };
        case SET_NEWS:
            return {...state, newsData: [...state.newsData, ...action.newsData]};

        default:
            return state;
    }
};


export const newLikeAC = (id) => ({type: LIKE, id});
export const newUnlikeAC = (id) => ({type: DISLIKE, id});
export const setNewsAC = (news) => ({type: SET_NEWS, news});

export default reducerNews;
