import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new Website', body: 'Lorem ipsum...', author: 'Mario', id: 1},
        { title: 'Welcome Party', body: 'Lorem ipsum...', author: 'Gemar', id: 2},
        { title: 'Web dev top tips', body: 'Lorem ipsum...', author: 'Yoshi', id: 3}
    ]); 
    
    /* const handleClick = () => {
        console.log("Clicked !")
    }
    const handleClickMeAgain = (name) => {
        console.log("Clicked", name)
        setName('Gemar')
    } */
    const handleDelete = (id) =>{
        const newBlogList = blogs.filter((blog) => blog.id !== id)
        setBlogs(newBlogList)
    }


    return (
        <div className="home">
            {/* <p>{ name }</p>
            <button onClick={handleClick}> Click me </button>
            <button onClick={() => {
                handleClickMeAgain('Gemar')
            }}> Click me Again</button> */}

            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            {<BlogList blogs={ blogs.filter((blog) => blog.author === 'Mario')} title="Mario's Blogs" handleDelete={handleDelete} />}
        </div>
    )
}
export default Home;