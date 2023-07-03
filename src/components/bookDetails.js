import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import Home from '../pages/home'
import './book.css';
import './allBook.css';

function BookDetails(){
const [book ,setBook] = useState([]);
// const [url,setUrl]=useState([])
const params = useParams();
  useEffect(()=>{
    fetch(`http://localhost:4000/books/${params.bookId}`).then((res)=> res.json()).then((result)=>setBook(result)).catch((err)=>console.error(err))
  
  },[]);

  

  //delete product by id 
  const deleteById =(id)=>{
    Swal.fire({
        title:`Are You Sure To delete: ${book.title}`,
        showCancelButton:true,
      }).then((data)=>{if(data.isConfirmed){
        fetch(`http://localhost:4000/books/${id}`,{method:"delete"}).then((res)=>res.json());

      }})
}


// get link to buy book
if(book.buy_links){
  var buttons = (book.buy_links).map((link)=>{
    return(
        <>
           
                    <li >
                    <span>{link.name}</span> <a key={link.name}  href={link.url} target='_blank'>click to buy the book</a>
                    </li>
        </>
    )
});
}
    
  return(
   <>
    <div className='' key={book.id} >
        <h1 className='text-center p-3 m-2 text-success'>{book.title}</h1>
      
        <div className='d-flex p-3 flex-wrap justify-content-evenly align-items-center'>
        <div className='image col-12 col-md-5' >
           <img className='d-block m-auto' src={book.book_image } alt={book.title} />
       </div>
       <div className='title p-4  col-12 col-md-6'>
        <h5> writen by <span className='text-success'>{book.author}</span></h5>
       <p className=''>{book.description}</p>
      <h5> price : </h5> {
       (book.price_des>0)  ?<>
       <span className='new price'>{book.price_des }$</span>
        <span className='old price'>{book.price }$</span>
       </>:<span className=' price'>{book.price }$</span>
       }
       </div>
       
        </div>
       <div className='card-links '>
            <h3> the places which book is available</h3>
                    <ol>
                        <div className='d-flex flex-wrap'>
                        {buttons}
                        </div>
                     
                    </ol>
     
       </div>
       <div className='card-body text-center'>
           <Link className='btn btn-outline-success m-1  d-inline-block w-25' to={`/`} >
             <i className="fa fa-arrow-left" aria-hidden="true"></i> Read less</Link>
           
        <Link className='btn btn-outline-success m-1 d-inline-block'   onClick={()=>{deleteById(book.id)}} >Delete</Link>
        <Link className='btn btn-outline-success m-1 d-inline-block ' to={`/books/edit`} >Edit</Link>
       </div>
       
    </div>
 
    </> 
  )
  
}
export default BookDetails;

