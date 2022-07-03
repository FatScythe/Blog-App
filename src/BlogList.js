const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;

    return (
        { blogs.map((blog) => (
            <div className="blog-wrapper" key={ blog.id }>
                <h2>{ blog.title }</h2>
                <p>Written by: { blog.author } </p>
            </div>
        )) }
        // <h1>Hello world or something dfkm!!!! </h1>
    );
}

export default BlogList;