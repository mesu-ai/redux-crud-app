import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { deleteBooks } from '../../app/features/books/deleteBookSlice';
import { fetchBooks } from '../../app/features/books/getBookSlice';
import './Home.scss';

const Home = () => {

    const { isLoading, error, books } = useSelector(state => state.book);
    // const books =useSelector(state=>console.log(state));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);


    const handleDelete=(id)=>{

        dispatch(deleteBooks(id));

        console.log(id);

    }

    return (
        <div>
            <h4>User Table</h4>

            {isLoading &&
                <h5>Loading...</h5>

            }

            {error &&
                <h5>{error.message}</h5>
            }
            <div className='tableConteiner'>
            <table >
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th colSpan={2}>Action</th>

                    </tr>
                    
                </thead>

                {books &&
                    books.map((book,index) =>

                        <tbody key={index}>
                            <tr >
                                <td>{book?.id}</td>
                                <td>{book?.title}</td>
                                <td> <button className='updateBtn'>Update</button> </td>
                                <td> <button onClick={()=>handleDelete(book?.id)} className='deleteBtn'>Delete</button> </td>
                            </tr>
                        </tbody>




                    )}
            </table>

            </div>
            

        </div>
    );
};

export default Home;