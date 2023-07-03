
import { useEffect, useState } from "react";
import Book from "./book";
import ShowDetails from './showDetailsButton';
// import './allBook.css';

function BestSelling(){
    const[books , setBook] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/books').then((res)=>res.json()).then((book)=>setBook(book)).catch((err)=>console.error(err))
    },[]);


    const bestSelling = books.map((book)=>{
       
       if( book.rank_last_week <5){
        return( 
           <Book book={book} /> 
            )
       } 
      
            });
return(
    <>
    
    <div className="container cards">
        {books.length>0 ?bestSelling : <div className="spinner-border text-info p-4 m-auto" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>}
    </div>
    </>
)
}
export default BestSelling;