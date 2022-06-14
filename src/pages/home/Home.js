import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchBooks } from '../../app/features/books/getBookSlice';
import './Home.scss';

const Home = () => {

    const { isLoading, error, books } = useSelector(state => state.book);
    // const books =useSelector(state=>console.log(state));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooks())
    }, [dispatch]);

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
                    <th>Id</th>
                    <th>Title</th>
                    <th colSpan={2}>Action</th>

                </thead>

                {books &&
                    books.map(book =>

                        <tbody >
                            <tr >
                                <td>{book?.id}</td>
                                <td>{book?.title}</td>
                                <td>Update</td>
                                <td>Delete</td>
                            </tr>
                        </tbody>




                    )}
            </table>

            </div>
            

        </div>
    );
};

export default Home;