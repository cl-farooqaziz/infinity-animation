import React from 'react'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Form from './components/form/Form'
import Bussiness from './components/Bussiness/Bussiness'
import Assisted from './components/Assisted/Assisted'
import Animation from './components/video-animation/Animation'

const page = () => {
  return (
    <>
      <div className='bg-white'>
        <Header />
        <Banner />
        <Form />
        <Bussiness />
        <Assisted />
        <Animation />
      </div>
    </>
  )
}

export default page
