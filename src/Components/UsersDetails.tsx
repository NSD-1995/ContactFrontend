import React from 'react';
import '../Components/userDetails.css'
import {
    Link
} from "react-router-dom";
interface userDetails {
    id: number,
    img: string,
    firstname: string,
    lastname: string,
    email: string

}

function UsersDetails(props: userDetails) {
    return (
        <Link to={`/${props.id}`} className="user-link">
            <div className="UserHead">
                <div className='image'>
                    <img src={props.img} alt='avatar' />
                </div>
                <div>
                    <h3>{props.firstname}{props.lastname}</h3>
                </div>
            </div>
        </Link>

    );
}

export default UsersDetails;
