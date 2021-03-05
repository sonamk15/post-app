import './index.css';
import likeImage from "../../../assets/like.png";
import dislikeImage from "../../../assets/dislike.jpeg";

function AllPosts({ posts, handelChange, handelLikeDislike }) {
    const handelScroller = (event) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
        if (scrollHeight - scrollTop === clientHeight) {
            if (handelChange) {
                handelChange()
            }
        }
    }

    return (
        <div className='all-posts' onScroll={handelScroller}>
            {posts.map((item) => (
                <div className="blog">
                    <div className="headline">
                        <h1>{item.title}</h1>
                        <img src={item.isFavourite ? likeImage: dislikeImage}/>
                    </div>
                    <p>{item.body}</p>
                    <button onClick={() => handelLikeDislike(item.id)}>{"Favourite/Unfavorite"}</button>
                </div>
            ))}
        </div>
    )
}

export default AllPosts;