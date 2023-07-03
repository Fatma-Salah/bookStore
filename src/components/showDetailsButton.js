import { Link } from "react-router-dom";
import BookDetails from "./bookDetails";
function ShowDetails(props){
const {showdetails,book,deleteById}=props;


    return(
        <>
        
        {showdetails &&<>
            <Link className='btn btn-outline-info mx-1' to={`/books/${book.id}`} >Details</Link>
                    
                    <Link className='btn btn-outline-info'  onClick={()=>{deleteById(book.id);}}>Delete</Link>
                    <Link className='btn btn-outline-info ms-1' to={`/books/edit`} >Edit</Link>
        </>
        }
                {!showdetails &&
                <>
                <BookDetails/>
                </>
                }
    
        </>
    )
}
export default ShowDetails;