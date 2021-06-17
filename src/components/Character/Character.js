import React from 'react'
import './character.scss'

const Character = (props) => {

    const {setId} = props
    const {name} = props
    const {img} = props
    const {id} = props
    const jpg = '.jpg'


    return (
        <div className='card' key={id}>
            <h1>{name}</h1>
            <img src={`${img}${jpg}`} alt="no-img" />
            <div className='buttons'>
            <button  onClick = {()=>setId(id)} >Add</button>
            <button>Info</button>
            </div>
        </div>
    )
}

export default Character
