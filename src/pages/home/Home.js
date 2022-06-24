import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { deleteStations, fetchStations } from '../../app/features/station/stationSlice';
import AddStation from '../adstation/AddStation';
import UpdateStation from '../updatestation/UpdateStation';
import './Home.scss';

const Home = () => {

    const { t } = useTranslation();

    // const [updateItem, setUpdateItem] = useState({})

    const { isLoading, error, stations } = useSelector(state => state.station);
    const navigate = useNavigate()

    //  const bookss =useSelector(state=>console.log(state));
    //  console.log(stations);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStations());
    }, [dispatch]);

    const handleAddStation = () => {
        navigate('/addbooks');

    }


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
            <div style={{marginBottom:'30px'}}>
                <h1>{t("Station Table")}</h1>

            </div>

            {isLoading &&
                <h5>{t("Loading...")}</h5>
            }

            {error &&
                <h5>{error.message}</h5>
            }
            <div id='userTable'>
                <table >
                    <thead>
                        <tr className='head1Container'>
                            <th colSpan={2} className='searchContainer'>
                                <input className='searchField' type="search" name="search"
                                placeholder='Search here...' id="" />
                            </th>
                            <th colSpan={3} className='addStationContainer'>
                                <button style={{marginBottom:0}} onClick={handleAddStation} className='addBtn tableAdd'>{t("Add New Station")}</button>
                            </th>

                        </tr>
                        <tr>
                            <th>#</th>
                            <th>{t("Title")}</th>
                            <th>{t("Frequency")}</th>
                            <th colSpan={2}>{t("Action")}</th>

                        </tr>

                    </thead>

                    {stations &&
                        stations.map((station, index) =>

                            <tbody key={index}>
                                <tr >
                                    <td>{index+1}</td>
                                    <td>{station?.name}</td>
                                    <td>{station?.frequency}</td>
                                    <td> <button onClick={() => handleUpdate(station)} className='updateBtn'>{t("Update")}</button> </td>
                                    <td> <button onClick={() => handleDelete(station?._id)} className='deleteBtn'>{t("Delete")}</button> </td>
                                </tr>
                            </tbody>




                        )}
                </table>

            </div>


        </div>
    );
};

export default Home;