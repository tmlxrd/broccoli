import React from 'react'
import Body from './body'
import HeadContainer from './head/head-container'
import style from './style.module.css'

const App = () =>{
    return <div className={style.generalDiv}>
        <div className={style.head}><HeadContainer /></div>
        <Body />
        </div>
}

export default App