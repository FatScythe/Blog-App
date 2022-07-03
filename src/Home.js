import { useState } from "react";
import BlogList from "./BlogList";

    const Home = () => {
        
        const [blogs, setBlogs] = useState([
            {title : 'How to kill a dragon', author : 'Ajimobi Sango', content : 'lorem ipsium dolor sit amet ...', id : 0},
            {title : 'Finding Aisha', author : 'Abdullahi Fardah', content : 'lorem ipsium dolor sit amet ...', id : 1},
            {title : 'Yahoo boys vs Tech bros', author : 'Name cannot be blank', content : 'lorem ipsium dolor sit amet ...', id : 2},
            {title : 'Vue vs React : Battle of the JS frameworks', author : 'Timi Omoyeni', content : 'lorem ipsium dolor sit amet ...', id : 3}
            ]);
        
        return (
            <div className="content">
                <BlogList blogs = { blogs }  title = "React Die"/>
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