import { useEffect, useState } from "react";
import List from "./components/list/list";
import Pagination from "./components/pagination/pagination";


function App(){

    const [products,setProducts] = useState([])
    const [currentPage,setCurrentPage] = useState(1);
    const [postsPerPage,setPostsPerPage]=useState(6);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        async function fetchingProd(){
            const res = await fetch("https://dummyjson.com/products");
            const data = await res.json();
            console.log(data)
            setProducts(data.products);
            setLoading(false)
        }

        fetchingProd()
        .then(()=>console.log("fetched successful"))
        .catch((err)=> console.log("error occured ",err));
    },[])
    
    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPosts = products.slice(firstPostIndex,lastPostIndex)


    return(
        <>
          <div className="main-container">
            <h1>Products List</h1>
            {loading && <div className="loader"></div>}
            <List products={currentPosts}/>
            <Pagination 
             postsPerPage = {postsPerPage}
             setCurrentPage={setCurrentPage}
             currentPage = {currentPage}
             totalPosts={products.length}/>
          </div>
        </>
    )
}

export default App;