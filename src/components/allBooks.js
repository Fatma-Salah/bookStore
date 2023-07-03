import { useEffect, useState } from "react";

import Swal from 'sweetalert2';
import Book from "./book";


function AllBooks(){
    const[books , setBook] = useState([]);

    useEffect( ()=>{getAllProduct() },[]);

  const getAllProduct = ()=>{
    fetch('http://localhost:4000/books').then((res)=>res.json()).then((book)=>setBook(book)).catch((err)=>console.error(err))
}

    const allBook = books.map((book)=>{
        //delete product by id 
        const deleteById =(id)=>{
            Swal.fire({
                title:`Are You Sure To delete: ${book.title}`,
                showCancelButton:true,
              }).then((data)=>{if(data.isConfirmed){
                fetch(`http://localhost:4000/books/${id}`,{method:"delete"}).then((res)=>res.json()).then((data)=>{
                getAllProduct() 
            } )
              }})
        }
    
        return(
    <>     <Book book={book} deleted={deleteById}/> 
   </>
        )
        
            })
         
    return(
        <>
<div className="container cards">
            { books.length > 0 ? allBook :
            <div className ="spinner-border text-info p-4 m-auto" role="status">
            <span className = "visually-hidden">Loading...</span>
          </div>}
</div>
        </>
    )
}
export default AllBooks;