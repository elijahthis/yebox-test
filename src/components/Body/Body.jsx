import { useEffect, useState } from "react";
import PostItem from "../PostItem";
import "../../App.css";

const Body = () => {
    const [posts, setPosts] = useState([]);
    // let newPosts;

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET",
        })
            .then((res) =>
                res.json().then((res) => {
                    console.log(res);
                    // newPosts = res;
                    setPosts(res);
                })
            )
            .then((res) => console.log(posts))
            .catch((err) => console.log(err));
    }, [posts]);

    return posts.length === 0 ? (
        <p>Loading</p>
    ) : (
        <div className="Posts">
            {posts.map((post, ind) => (
                <PostItem data={post} key={ind} />
            ))}
        </div>
    );
};

export default Body;
