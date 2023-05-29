import { useState } from "react";


const Home = () => {

   const [name, setName] = useState('mario') ;
   const[age, setAge]= useState(30);
    
    const handleClick =() =>{
        setName('luigi');
        setAge(55);
    }

    // const handleClickAgain = (name, e) => {
    //     console.log("hello "  + name, e.timeStamp);
    // }
     
    
      return ( 
         <div className="home">
            <h2>HomePage</h2>
            <p>{ name } is { age } years old!</p>
            <button onClick={handleClick}>Click Me</button>
             {/* <button onClick={(e) => {handleClickAgain('Mario', e)}}>Click Again</button> */}
        </div>
     );
}
 
export default Home ;