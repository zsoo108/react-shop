import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = (props) => {
    const navigate = useNavigate();
    // console.log(props.shoes)
    const {id, title, imgUrl, price} = props.shoes  // 비구조할당

    return (
        <div className="flex flex-col items-center" onClick={()=>{navigate('/detail/' + id)}}>
            <img src={imgUrl} alt="상품1" className="w-4/5 h-auto rounded-lg mb-3" />
            <h4 className="text-lg font-bold text-gray-900">{title}</h4>
            <p className="text-gray-500 mt-1">{price}</p>
        </div>
    )
}

export default Product