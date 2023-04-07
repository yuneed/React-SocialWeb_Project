const AuthReducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return {
                user:null,
                isFetching: true,
                error: false,
            };
        case "LOGIN_SUCCESS":
            return {
                user:action.payload,
                isFetching: false,
                error: false,
            };
        case "LOGIN_FAILURE":
            return {
                user:null,
                isFetching: false,
                error: true,
            };
        case "FOLLOW":
            return {
                ...state,
                user:{
                    ...state.user,
                    followings:[...state.user.followings, action.payload]
                }
            };
        case "UNFOLLOW":
            return {
                ...state,
                user:{
                    ...state.user,
                    followings:state.user.followings.filter((following) => following !== action.payload)
                    // "payload" : 액션에 대한 추가 데이터를 전달
                    }
                }
            default:
                return state
    }
};

export default AuthReducer;