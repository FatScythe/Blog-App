import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor ] = useState('');
    const [ genre, setGenre ] = useState('Tech');
    const [ pending, setPending ] = useState(false);

    const history = useHistory();

    const handleSubmit =  (e) => {
        e.preventDefault();
        const blogPost = { title, author, body, genre };
        setPending(true);

        fetch('http://localhost:8000/blogs', {
            method : 'POST',
            headers : { "Content-Type" : "application/JSON"},
            body : JSON.stringify(blogPost)
        }).then(() => {
            setPending(false);
            console.log('Added a new blog post');
            // history.go(-1);
            history.push('/');
        })
    }

    return ( 
        <div className="create container">
            <h2>Add a new blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={ title }
                    onChange = {(e) => setTitle(e.target.value) }
                />

                <label>Blog body:</label>
                <textarea
                    required
                    value={ body }
                    onChange = {(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog author</label>
                <input
                    type="text"
                    required
                    value={ author }
                    onChange = {(e) => setAuthor(e.target.value)}
                />

                <label>Blog genre</label>
                <select
                    value={ genre }
                    onChange = {(e) => setGenre(e.target.value)}
                >
                    <option value="Spiritual">Spiritual</option>
                    <option value="Love">Love</option>
                    <option value="Tech">Tech</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Business">Business</option>
                </select>
                { !pending && <button>Add Blog</button> }
                { pending && <button disabled>Adding blog...</button> }
            </form>
        </div>
    );
}
 
export default Create;