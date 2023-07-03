import { useState } from 'react';
import './addBook.css';
function AddBook(){
    const [file,setFile] = useState([]);
    const [title,setTitle] = useState('');
    const [author,setAuthor] = useState('');
    const [publisher,setPublisher] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState(0);
    const [priceDes,setPriceDes] = useState(0);
    const formSubmit = (e)=>{
        e.preventDefault();
        fetch('http://localhost:4000/books',{
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:JSON.stringify
            ({
                book_image:file,
                title:title,
                author:author,
                publisher:publisher,
                description:description,
                price:price,
                price_des:priceDes,
                
            })
        }).then((res)=>res.json).then((data)=>console.log(data))
    }
    

    return(
        <>
            <div className="container container-from">
                <h3>Add  new book  </h3>
                <form onSubmit={formSubmit}>
                    <label>Cover Image</label>
                    <input required className='file' type={"file"} onChange={(e)=>setFile(e.target.value)} />
                    <input required type={"text"} placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
                    <input required type={"text"} placeholder="author name" onChange={(e)=>setAuthor(e.target.value)}/>
                    <input required type={"text"} placeholder="Publisher name"  onChange={(e)=>setPublisher(e.target.value)}/>
                    <input required type={"text"} placeholder="description"  onChange={(e)=>setDescription(e.target.value)}/>
                    <input required type={"number"} placeholder="price"  onChange={(e)=>setPrice(e.target.value)}/>
                    <input required type={"number"} placeholder="price_descound" onChange={(e)=>setPriceDes(e.target.value)}/>
                    <input required type={"submit"}/>
                </form>
            </div>
        </>
    )
}
export default AddBook;