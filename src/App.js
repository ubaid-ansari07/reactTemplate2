import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import UserProducts from './components/UserProducts'

export default function App() {
  return (
    <>
    <div className='container-fluid'>
      <Header/>
    </div>
    <UserProducts/>
    <Footer/>
    </>

  )
}
