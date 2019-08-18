export const initialState = {
  nickname:'',
  me:'',
  addedNickname:false,
  mainPosts:[],
  addedPost:false,
}

export const ADD_NICKNAME = 'ADD_NICKNAME';
export const SET_NICKNAME = 'SET_NICKNAME';
export const ADD_POST = 'ADD_POST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const FIX_POST = 'FIX_POST';
export const DEL_POST = 'DEL_POST';
export const SEARCH_POST = 'SEARCH_POST';


 const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NICKNAME:{
      return{
        ...state,
        nickname:action.data
      }
    }
    case SET_NICKNAME:{
      return{
        ...state,
        me:action.data
      }
    }
    case ADD_POST:{
      return{
        ...state,
        mainPosts:[...state.mainPosts, action.data],
        addedPost:true,
      }
    }
    case ADD_POST_SUCCESS:{
      return{
        ...state,
        addedPost:false,
      }
    }
    case FIX_POST:{
      const {index, fixText, fixTitle, date, check} = action.data;
      const post = state.mainPosts[index];
      const mainpost = {...post, title:fixTitle, text:fixText, date}
      const mainPosts = [...state.mainPosts];
      mainPosts[index] = mainpost;
      return{
        ...state,
        mainPosts
      }
    }
    case DEL_POST:{
      const index = action.data;
      const mainPosts = [...state.mainPosts]
      mainPosts.splice(index,1);
      return{
        ...state,
        mainPosts
      }
    }
    case SEARCH_POST:{
      const term = action.data;
      const posts = state.mainPosts.filter(v => {
        if(v.title.includes(term) || v.me.includes(term)){
          return true;
        }
      });
      const mainPosts = [...posts]
      return{
        ...state,
        mainPosts
      }
    }
    default:{
      return{
        ...state,
      }
    }

  }
}


export default reducer
