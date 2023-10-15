import React, { FC, ReactNode } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export interface IMainLayout {
  className?: string,
  children: ReactNode
}
const MainLayout: FC<IMainLayout> = ({children}) => {
  return (
    <div className='wrapper'>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default MainLayout
