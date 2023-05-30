import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {

   const [blogs, setBlogs] = useState([
      {title: 'html', body: 'some html content here', author: 'Jake', id: 1},
      {title: 'css', body: 'some css content here', author: 'Jeff', id: 2},
      {title: 'javascript', body: 'some javascript content here', author: 'Jake', id: 3}
   ]);
    
      return ( 
         <div className="home">
               <BlogList blogs={blogs} title="All Blogs!"/>
               <BlogList blogs={blogs.filter((blogs)=> blogs.author==="Jeff")} title="Jeff's Blogs!"/>
        </div>
     );
}
 
export default Home ;