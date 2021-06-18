import React from 'react'
import './character.scss'
import {Link} from 'react-router-dom'
const Character = ({setId, name, img, id}) => {

    const jpg = '.jpg'


    return (
        <div className='card' key={id}>
            <h1>{name}</h1>
            <img src={`${img}${jpg}`} alt="no-img" />
            <div className='buttons'>
            <button  onClick = {()=>setId(id)} >Add</button>
            <Link to={`/character/${id}`}><button>Info</button></Link>
            </div>
        </div>
    )
}

export default Character
