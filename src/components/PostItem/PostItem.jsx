import "./PostItem.css";

const PostItem = ({ data }) => {
    return (
        <div className="PostItem">
            <h4>{data.title}</h4>
            <p>{data.body}</p>
        </div>
    );
};

export default PostItem;
