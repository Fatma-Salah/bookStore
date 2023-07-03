import { useState } from "react";
function NewBook(){
    const[books , setBook] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/books').then((res)=>res.json()).then((book)=>setBook(book)).catch((err)=>console.error(err))
    },[]);


    const specialOffer = books.map((book)=>{
       if( book.price_des >0){
        return( 
             <>
            <Book book={book}/>
             </>   
            )
       } 
      
            });
return(
    <>
    
    <div className="container cards">
        {books.length>0 ?specialOffer : <div className="spinner-border text-info p-4 m-auto" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>}
    </div>
    </>
)
}
export default NewBook;