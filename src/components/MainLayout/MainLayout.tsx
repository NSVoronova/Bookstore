import React, { FC, ReactNode } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'
import Loader from '../Loader/Loader'

export interface IMainLayout {
  className?: string,
  children: ReactNode
}
const MainLayout: FC<IMainLayout> = ({children}) => {
  // const isLoading = useSelector(({isLoading}) => isLoading);
  return (
    <div className='wrapper'>
      <Header/>
      <main>{children}</main>
      {/* {isLoading ? <Loader/> : null} */}
      <Footer/>
    </div>
  )
}

export default MainLayout
