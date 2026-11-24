import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    // 컴포넌트가 마운트 & 업데이트 될 때 마다 작동
    console.log('hello');
    console.log(count);
  })

  return (
    <>
        <div>About 페이지입니다.</div>
        <h4>회사 정보</h4>
        <Outlet />
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>버튼</button>
    </>
    
  )
}

export default About