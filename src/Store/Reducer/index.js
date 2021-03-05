const initialState = {
    posts: [],
    favoritePosts: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts: action.posts
            }
        case 'ADD_FAVORITE_POST':
            return {
                ...state,
                favoritePosts: action.posts
            }
        default:
            return state
    }

}