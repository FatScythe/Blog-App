import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogContent = () => {
    const { id } = useParams();
    const { data: blogs , pending, error } = useFetch(`http://localhost:8000/blogs/${id}`);
    const history = useHistory();
    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method : 'DELETE'
        }).then(() => {
            console.log(blogs.title + 'has been deleted');
            history.push('/');
        })
    }

    return (
        <div className="blog-content container">
            <p className="genre">Blog {id}</p>
            {error && <div>{ error }</div>}
            {pending && <div>Loading...</div>}
            {blogs && (
                <article>
                    <h2>{ blogs.title }</h2>
                    <p>Written by- <span>{ blogs.author }</span></p>
                    <div >Genre - <span className="genre">{ blogs.genre }</span></div><br></br>
                    <div>{ blogs.body }</div>
                    <button onClick={ handleDelete } className = "btn">delete</button>
                </article>
            )}
            
        </div>
    );
}
 
export default BlogContent;