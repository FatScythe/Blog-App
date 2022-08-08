import BlogList from "./BlogList";
import useFetch from "./useFetch";


    const Home = () => {
        
        // const [blogs, setBlogs] = useState([
        //     {title : 'How to kill a dragon', author : 'Fahm', content : 'lorem ipsium dolor sit amet ...', id : 0},
        //     {title : 'Finding Aisha', author : 'Fardah', content : 'lorem ipsium dolor sit amet ...', id : 1},
        //     {title : 'Yahoo boys vs Tech bros', author : 'Name cannot be blank', content : 'lorem ipsium dolor sit amet ...', id : 2},
        //     {title : 'Vue vs React : Battle of the JS frameworks', author : 'Timi', content : 'lorem ipsium dolor sit amet ...', id : 3},
        //     {title : 'VanillaJS vs React : Battle of the JS frameworks', author : 'Fahm', content : 'lorem ipsium dolor sit amet ...', id : 4}
        //     ]);

        // const [name, setName] = useState('fahm');
        
        // const handleClick = () => {
        //     setName('dayo');
        // }

        // Deleting a blog
        // const handleDelete = (id) => {
        //     const newBlog = blogs.filter((blog) => blog.id !== id);
        //     setBlogs(newBlog);
        // }

        // useEffect(() => {
        //     console.log('page was rendered');
        //     // console.log(blogs);
        // }, [name, blogs])
        
        const { data: blogs, pending, error } =  useFetch('http://localhost:8000/blogs');

        return (
            <div className="content container">
                {error && <div>could not fetch data from server!</div>}
                {pending && <div>Loading...</div>}
                {blogs && <BlogList blogs = { blogs }  title = "All Blogs" /* handleDelete =  { handleDelete } */ />}
                {/* <BlogList blogs = { blogs.filter((blog) => blog.author === 'Fahm' )} title = "Fahm's Blog" /> */}
                {/* <button onClick={ handleClick }>Change name</button>
                <p> { name } </p> */}
                {/* {
                    blogs.map((blog) => (
                        <div className="blog-wrapper" key={ blog.id }>
                            <h2>{ blog.title }</h2>
                            <p>Written by: { blog.author } </p>
                        </div>
                        ))
                } */}
            </div>
        );
    }   
 
export default Home;

 

















// let name = 'Fahm';
        // let age = 22;

        // const [name, setName ] = useState('Fahm');
        // const[age, setAge] = useState(22);
        // const array = [1,2,4,5,3];
        // const person = { name : 'Faridah', age : 20};
        // const link = "www.mdnbootstrap.com";
        // const handleClick = (e) => {
            // console.log('hello, fahm', e.target);
            // name = 'Gbenga';
            // console.log(name);

            // setName('Gbenga');
            // setAge(23)
        // }

        // const handleClickAgain = (name, e) => {
        //     console.log('hello ' + name, e);
        // }

        // OUTPUTTING A LIST



        {/* <h1>Homepage</h1>
                <h2>Hello World!!!</h2>
                <p> { name } </p>
                <p> { array } </p>
                <p> { (Math.random() * 100).toFixed(0) } </p> */}
                {/* <p>{person}</p> */}
                {/* <a href={ link }>To a site</a><br></br> <br></br>
                <button onClick={handleClick}>Click me</button>
                <button onClick={(e) => {handleClickAgain('Fahm', e)}}>Click me Again</button>
                <p>{name } is { age }</p> */}