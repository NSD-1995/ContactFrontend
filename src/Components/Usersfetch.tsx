import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UsersDetails from './UsersDetails';
import "../Components/userFetch.css"
import Loading from './Loading';


interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

interface UsersResponse {
    data: User[];
}



const Usersfetch: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [nodata, setNodata] = useState<boolean>(false)
    const [fetchUsers, setFetchUsers] = useState<User[]>([]);
    let [page, setPage] = useState<number>(1);
    const [error, seterror] = useState<string>('')

    useEffect(() => {
        if (page === 1) {
            setTimeout(() => {
                setLoading(true)
                axios.get<UsersResponse>('https://reqres.in/api/users?page=1')
                    .then((data) => {
                        setFetchUsers(data.data.data)
                    })
                    .catch(err => {
                        console.log(err.message);
                        seterror(err.message)
                    })
            }, 3000)
        } else {
            setLoading(true)
            axios.get<UsersResponse>(`https://reqres.in/api/users?page=${page}`)
                .then((data) => {
                    if (data.data.data.length === 0) {
                        setNodata(true)
                    } else {
                        setFetchUsers((prevData) => [...prevData, ...data.data.data])
                    }
                }
                )
                .catch(err => 
                    seterror(err.message)
                )
        }
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
                setPage(prevPage => prevPage + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="userFetch">
            <div className='heading'>
            <h1 >Users</h1>
            </div>
     
            {!loading && fetchUsers.length === 0  && !nodata && !error? (
                <Loading  />
            ) : (
                fetchUsers.map(item => (
                    <UsersDetails
                        key={item.id}
                        id={item.id}
                        img={item.avatar}
                        firstname={item.first_name}
                        lastname={item.last_name}
                        email={item.email}
                    />
                ))
            )}
            {error?<h4>{error}</h4>:''}
            {nodata?<h4>No more users</h4>:''}
        </div>
    );
};

export default Usersfetch;
