import React, { useEffect, useCallback, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Viewuser = () => {
    const [user, setUser] = useState();
    const { id } = useParams()

    const fetchSingleUser = useCallback(async () => {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setUser(response.data)
    }, [id])

    useEffect(() => {
        fetchSingleUser()
        return () => {
            console.log('I run after re-render, but before the next useEffect');
        };
    }, [id]);

    return (
        <div className='page_container'>
            saheb{id}
            {user &&

                <ul className='user_container' style={{margin:'auto',width:'80%'}}>
                    <li>Name : {user.name}</li>
                    <li>Email : {user.email}</li>
                    <li className='btn'><Link className='btnLink' to="/user">Go Back To User</Link></li>
                </ul>

            }
            

        </div>
    );
}

export default Viewuser;
