import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {AddFavoritePosts} from "../../Store/Action";
import Loader from "../Comman/loader";
import AllPosts from "../Comman/AllPosts"


function FavoritePost(props) {
    const [pageLoader, setPageLoader] = useState(false);
    useEffect(() => {
        getFavorite()
    }, [])

    const getFavorite = () => {
        setPageLoader(true)
        axios.get('https://serverfake.herokuapp.com/posts/?_page=1&isFavourite=true')
        .then((res) => {
            setPageLoader(false);
            props.AddFavoritePosts(res.data)
        })
    }

    const handelLikeDislike = (postId) => {
        let updatePost = props.favoritePosts.filter(item => item.id != postId)
        props.AddFavoritePosts(updatePost)
    }
    
    if (pageLoader) {
        return <Loader pageLoader={pageLoader}/>
    }
    return (
        <section className="post-home">
        <div className="posts">
            {props.favoritePosts.length && <AllPosts
                posts={props.favoritePosts}
                handelLikeDislike={handelLikeDislike}
            />}
        </div>
    </section>   
    )
}

const mapStateToProps = (state) => {
    return {
        ...state,
        favoritePosts: state.post.favoritePosts
    }
}

const mapDispatchToProps = (dispacth) => {
    return bindActionCreators(
        {
            AddFavoritePosts
        },
        dispacth
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritePost);