import React from 'react'
import loaderGif from '../../assets/loading-buffering.gif'

const Preloader = () =>{
    return <div>
        <img src={loaderGif} alt='loader gif'/>
    </div>
}

export default Preloader