import { Link } from "react-router-dom";

const BlogList = ({ blogs , title /*, handleDelete */ }) => {
    // const blogs = props.blogs;
    // const title = props.title;

    return (
            <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map((blog) => (
             <div className="blog-wrapper" key={ blog.id }>
                <Link to={`/blogs/${blog.id}`}>
                <h2>{ blog.title }</h2>
                <div className="genre">{ blog.genre }</div>
                <p>Written by: { blog.author }</p>
                {/* <button className="blog-delete" onClick={() => handleDelete(blog.id)}>Delete</button> */}
                </Link> 
            </div>
            ))}
            </div>
    );
}

export default BlogList;