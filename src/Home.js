import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    const {data: blogs, isPending, error, handleDelete} = useFetch('http://localhost:8000/blogs')
   

    return (
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && <h3> Loading ...</h3>}
            {blogs && <BlogList 
                blogs={blogs} 
                title="All Blogs!" 
                handleDelete={handleDelete} />
                
            }
            {blogs && <BlogList 
                blogs={blogs.filter((blog) => blog.author === "Gemar")} 
                title="Gemar's Blogs" 
                handleDelete={handleDelete} />
            }
            
        </div>
    )
}
export default Home;