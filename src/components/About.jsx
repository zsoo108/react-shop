import React from 'react'
import { Outlet } from 'react-router-dom'

const About = () => {
  return (
    <>
        <div>About 페이지입니다.</div>
        <h4>회사 정보</h4>
        <Outlet />
    </>
    
  )
}

export default About