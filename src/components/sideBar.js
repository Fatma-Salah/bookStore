import { Link } from 'react-router-dom';
import './sideBar.css';

function SideBar(){
return(
    <>
   <div className="side">
        <ul>
            <li>
                <Link  to='/allBook'>
                    Get All Books
                </Link>
            </li>
            <li>
                <Link  to='/bestSelling'>
                  Best Selling Books
                </Link>
            </li>
            {/* <li>
                <Link  to=''>
                  New Books
                </Link>
            </li> */}
            <li>
                <Link  to='/special offer'>
                  Special Offers
                </Link>
            </li>
            <li>
                <Link  to='/addBook'>
                  Add New Book
                </Link>
            </li>
        </ul>
    </div> 
    </>
);
}
export default SideBar;