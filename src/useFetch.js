import { useState, useEffect } from "react";
const useFetch = (url) =>{

    const [data, setBlogs] = useState(null);
    const [isPending, setPending] = useState(true) 
    const [error, setError] = useState("")

    const handleDelete = (id) =>{
        const newBlogList = data.filter((blog) => blog.id !== id)
        setBlogs(newBlogList)
    }


    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then(res => {
              if (!res.ok){
                throw Error("Cannot fetch the data")
              }
              return res.json()
            })
            .then(data =>{
                setPending(false)
                setBlogs(data)
            })
            .catch( err => {
                setError(err.message)
                setPending(false)
            })
        }, 1500)
    }, []);

    return {data, isPending, error, handleDelete}
}

export default useFetch;