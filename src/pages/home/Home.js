import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
// import { deleteBooks } from '../../app/features/books/deleteBookSlice';
import { deleteBooks, fetchBooks, updateBooks } from '../../app/features/books/getBookSlice';
import './Home.scss';

const Home = () => {

    const { isLoading, error, books } = useSelector(state => state.book);
    const navigate= useNavigate()

    //  const bookss =useSelector(state=>console.log(state));
    console.log(books);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);


    const handleDelete = async (id) => {

        dispatch(deleteBooks(id));

    }

    const handleUpdate = (data) => {
        // console.log(data);
        navigate('/updatebooks',{state:{'book':data}})
        

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
            <div id='userTable'>
                <table >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th colSpan={2}>Action</th>

                        </tr>

                    </thead>

                    {books &&
                        books.map((book, index) =>

                            <tbody key={index}>
                                <tr >
                                    <td>{book?.id}</td>
                                    <td>{book?.title}</td>
                                    <td> <button onClick={() => handleUpdate(book)} className='updateBtn'>Update</button> </td>
                                    <td> <button onClick={() => handleDelete(book?.id)} className='deleteBtn'>Delete</button> </td>
                                </tr>
                            </tbody>




                        )}
                </table>

            </div>


        </div>
    );
};

export default Home;