import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { deleteStations, fetchStations } from '../../app/features/station/stationSlice';
import AddStation from '../adstation/AddStation';
import UpdateStation from '../updatestation/UpdateStation';
import './Home.scss';

const Home = () => {

    const {t}=useTranslation();

    // const [updateItem, setUpdateItem] = useState({})

    const { isLoading, error, stations } = useSelector(state => state.station);
    const navigate = useNavigate()

    //  const bookss =useSelector(state=>console.log(state));
    //  console.log(stations);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStations());
    }, [dispatch]);

    // const handleAddBook = () => {
    //     navigate('/addbooks');

    // }


    const handleDelete = async (id) => {

        dispatch(deleteStations(id));

    }

    const handleUpdate = (data) => {
        // console.log(data);
        navigate('/updatebooks', { state: { 'station': data } })

        // setUpdateItem(data);

    }

    return (
        <div>
            <div>
                <h1>{t("Station Table")}</h1>
                <div className='bookContainer'>
                    <AddStation />
                    {/* <UpdateBooks updateItem={updateItem}/> */}
                    

                </div>

                {/* <button onClick={handleAddBook} className='addBtn'>Add Book</button> */}
            </div>

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
                            <th>Frequency</th>
                            <th colSpan={2}>Action</th>

                        </tr>

                    </thead>

                    {stations &&
                        stations.map((station, index) =>

                            <tbody key={index}>
                                <tr >
                                    <td>{station?._id}</td>
                                    <td>{station?.name}</td>
                                    <td>{station?.frequency}</td>
                                    <td> <button onClick={() => handleUpdate(station)} className='updateBtn'>Update</button> </td>
                                    <td> <button onClick={() => handleDelete(station?._id)} className='deleteBtn'>Delete</button> </td>
                                </tr>
                            </tbody>




                        )}
                </table>

            </div>


        </div>
    );
};

export default Home;