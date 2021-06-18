import React from 'react'
import './character.scss'
import {Link} from 'react-router-dom'
import {MdLibraryAdd} from 'react-icons/md'
import {MdInfo} from 'react-icons/md'
const Character = ({setId, name, img, id}) => {

    const jpg = '.jpg'


    return (
        <div className='card' key={id}>
            <img src={`${img}${jpg}`} alt="no-img" />
            <h1>{name}</h1>
            <div className='buttons'>
            <button  onClick = {()=>setId(id)} > <MdLibraryAdd/> Add    </button>
            <Link to={`/character/${id}`}><button>  <MdInfo/> Info</button></Link>
            </div>
        </div>
    )
}

export default Character
