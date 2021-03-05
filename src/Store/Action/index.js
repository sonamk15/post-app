export const AddPost = (posts) => {
    return {
        type: "ADD_POST",
        posts: posts
    }
}

export const AddFavoritePosts = (posts) => {
    return {
        type: 'ADD_FAVORITE_POST',
        posts: posts
    }
} 