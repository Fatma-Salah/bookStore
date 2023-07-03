import ShowDetails from "./showDetailsButton";
function Book(props){
    const {book,deleted}=props;
    return(
        <>
         <div className='card' key={book.id} >
            <div className='card-image' >
                <img className="card-img-top" src={book.book_image } alt={book.title} />
            </div>
            <div className='card-body'>
                <h3 className='card-title'>{book.title}</h3>
                <p>Author : {book.author}</p>
                <p>Price:<span>  {
       (book.price_des > 0)  ?<>
       <span className='new price '>{book.price_des }$</span>
      <p className="">old price: <span className='old price'>{book.price }$</span></p>  
       </>  :  <span className=' price'>{book.price }$</span>
       } </span></p>
                <p>Publisher: {book.publisher}</p>      
    <ShowDetails book={book} showdetails ={true} deleteById ={deleted}/>
            </div>
         </div>
         </>  
    )
}export default Book;