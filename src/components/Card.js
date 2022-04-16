import React, { useContext, useState } from 'react'
import { gLikesContext } from '../App';


export default function Card({ name, email, id, image, location }) {
    const gLikes = useContext(gLikesContext)
    let [likes, setLikes] = useState(0);
   

    function setGlobalLikes(){
        setLikes(likes + 1);
        gLikes.setLikes(gLikes.likes + 1)

    }
    return (
        <div className="card mb-4 box-shadow">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal">{name} </h4>
            </div>
            <div className="card-body">
                <img src={image} alt={name} />
                <ul className="list-unstyled mt-3 mb-4">
                    <li>{email}</li>
                    <li>{location}</li>
                </ul>
                <button type="button" onClick={()=>{setGlobalLikes()}} className="btn btn-lg btn-block btn-outline-primary"> Likes: {likes}
                </button>
            </div>
        </div>
    )
}
