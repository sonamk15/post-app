import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import './index.css';
import { AddPost } from "../../Store/Action";

import AllPosts from "../Comman/AllPosts/index";
import Loader from "../Comman/loader";

function Home(props) {
    const [pageNumber, setPageNumber] = useState(1);
    const [pageLoader, setPageLoader] = useState(false);
    
    useEffect(() => {
        let isCancelled = false;
        try {
            getPosts()
        } catch (e) {
            throw e
        }
        return () => { isCancelled = true }
    }, []);

    const getPosts = async () => {
        setPageLoader(true)
        await axios.get(`https://serverfake.herokuapp.com/posts/?_page=${pageNumber}`)
            .then((res) => {
                props.AddPost([...res.data, ...props.posts])
                setPageLoader(false)
            })
    }

    const handelScroller = () => {
        setPageNumber(pageNumber + 1)
        getPosts()
    }

    const handelLikeDislike = (postId) => {
        let updatePost = props.posts;
        props.posts.map((item, index) => item.id == postId ? updatePost[index].isFavourite = !item.isFavourite: null)
        props.AddPost(updatePost)
    }

    console.log(props.posts, "POSTS")
    if (pageLoader) {
        return <Loader pageLoader={pageLoader} />
    }

    return (
        <section className="post-home">
            <div className="posts">
                {props.posts.length && <AllPosts
                    posts={props.posts}
                    handelChange={handelScroller}
                    handelLikeDislike={handelLikeDislike}
                />}
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state,
        posts: state.post.posts
    }
}

const mapDispatchToProps = (dispacth) => {
    return bindActionCreators(
        {
            AddPost
        },
        dispacth
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);