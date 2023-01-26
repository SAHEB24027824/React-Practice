import React from 'react';
import axios from 'axios';
import { useEffect, useState, useCallback, useReducer } from 'react';
import { Link, useSearchParams, useNavigate, Outlet } from 'react-router-dom'


function reducer(state, action) {
    switch (action.type) {
        case 'MOD':
            const data = state.map(user => {
                user.email = user.email
                return user;
            })
            console.log([...data])
            return [...data]
        default:
            return [...action.payload]
    }

}


const User = () => {

    // const [users, setUsers] = useState();

    async function actionCreator() {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response.data)
        dispatch({ payload: response.data })
    }


    const initialState = [{
        name: '',
        email: '',
        id: 0
    }]

    const [users, dispatch] = useReducer(reducer, initialState);


    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()

    useEffect(function () {
        actionCreator();
    }, [])

    // const fetchUser = useCallback(async () => {
    //     let response = await axios.get('https://jsonplaceholder.typicode.com/users');
    //     console.log(response.data)
    //     setUsers(response.data)
    // }, [])

    // useEffect(() => {
    //     fetchUser()

    //     return () => {
    //         console.log('I run after re-render, but before the next useEffect');
    //     };
    // }, []);

    return (
        <div className='users_container'>
            <button onClick={() => { dispatch({ type: 'MOD' }) }}>Mod</button>
            {
                users?.map(user => {
                    return (
                        <ul key={user.id} className='user_container'>
                            <li>Name : {user.name}</li>
                            <li>Email : {user.email}</li>
                            <li className='btn'><Link className='btnLink' to={`/user/${user.id}`}>View</Link></li>
                            <li className='btn'><button className='btnSearchParam' onClick={() => { setSearchParams({ id: user.id }) }}>View by Srarch Params</button></li>
                            <li className='btn'><button className='btnSearchParam' onClick={() => { navigate(`/user/${user.id}`) }}>Navigate with param</button></li>
                        </ul>
                    )
                })
            }
            <Outlet />
        </div>
    );
}

export default User;
