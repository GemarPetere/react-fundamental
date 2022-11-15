const BlogList = ({blogs, title, handleDelete}) =>{
    //const blogs = props.blogs;

    return(
        <div className="blog-list">
            <h2> { title } </h2>
            {blogs.map((blog) => (
                <div className='blog-previews' key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by {blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}> Hide me </button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;