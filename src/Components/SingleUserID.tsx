import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import "./Singleuserid.css"


interface userDetails {
    avatar: string,
    first_name: string,
    last_name: string,
    email: string

}

interface UsersResponse {
    data: userDetails;
}




function SingleUserID() {
    const { id } = useParams();
    const iduser = id
    const [fetchUsers, setFetchUsers] = useState<userDetails | null>(null);
    const [error, seterror] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        axios.get<UsersResponse>("https://reqres.in/api/users/" + iduser)
            .then((data) => {
                setLoading(true)
                setFetchUsers(data.data.data)
            })
            .catch(err => {
                setLoading(true)
                seterror(err.message)
            }
            )
    }, []);
    return (
        <div className="UserHeading">
            {error && <p>Failed to fetched the user</p>}
            {loading && !error ? (
                <div className="UserHeadSingle">
                    <div className='image'>
                        <img src={fetchUsers?.avatar} alt='avatar' />
                    </div>
                    <div>
                        <label>First Name:</label>
                        <h3>{fetchUsers?.first_name} </h3>
                        <label>Last Name:</label>
                        <h3>{fetchUsers?.last_name}</h3>
                        <label>Email:</label>
                        <h4>{fetchUsers?.email}</h4>
                    </div>
                </div>) : <Loading />}

        </div>

    );
}

export default SingleUserID;
