import React from 'react';
import { motion } from 'framer-motion';

export default function Control({setSelectedMode}){

    const onButtonClick=(mode)=>{
        setSelectedMode()
    }

    return(
        <div className="sidebar">
            <MyButton onClick={()=>onButtonClick('closed')}>Closed</MyButton>
        <MyButton onClick={()=>onButtonClick('open')}>Open</MyButton>

        <MyButton onClick={()=>onButtonClick('big')}>Big</MyButton>

        <MyButton onClick={()=>onButtonClick('normal')}>Normal</MyButton>

        </div>)
    
}

const MyButton = ({ children, onClick }) => (
    <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    >{children}</motion.button>
)