import React from 'react'
import Layout from '../Layout'
import './home.css'
import HeaderNext from './Header-next/HeaderNext'
import one from '../../assets/micro.webp'
import two from '../../assets/android.webp'
import three from '../../assets/java.webp'
import four from '../../assets/google.webp'
import five from '../../assets/adobe.webp'
import Card from '../../components/card/Card'
import SideBar from './sidebar/SideBar'
import OurServices from './ourservices/OurServices'
import OurProject from './ourProject/OurProject'
import OurBlog from './ourBlog/OurBlog'
import Freelancing from './freelancing/Freelancing'
const Home = () => {
  const data = [
    {img: one},
    {img: two},
    {img: three},
    {img: four},
    {img: five},

   ]
  return (
    <Layout>
      <div className='home'>
      <HeaderNext/>
      <div className="card-one">
      {
        data.map((el,i)=>(
          <Card el={el} key={i}/>
        ))
      }
      </div>
      <SideBar/>
      <OurServices/>
      <OurProject/>
      <Freelancing/>
      <OurBlog/>
      </div>
    </Layout>
  )
}

export default Home