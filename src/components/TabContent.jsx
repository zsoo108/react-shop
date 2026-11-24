import React, { useEffect, useState } from 'react'
import '../App.css';

const TabContent = ({tab}) => {
    const [fade, setFade] = useState('');

    useEffect(()=>{
        const animationTimer = setTimeout(()=>{setFade('end')}, 50);
        return ()=>{
            setFade('');
            clearTimeout(animationTimer);
        }
    }, [tab])

    return (
        <div className={"text-center start " + fade}>
            {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
        </div>
    )
}

export default TabContent