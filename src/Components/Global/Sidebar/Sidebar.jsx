// React Import
import React from 'react'

// Other Libraries

// Global Components

// Components
import HeaderSidebar from './HeaderSidebar'
import MenusSidebar from './MenusSidebar'

// Icons

// Assets

const Sidebar = () => {
  return (
    <div className=' p-5 z-50 fixed w-52 h-screen lg:block '>
        
        {/* Header For Sidebar */}
        <HeaderSidebar/>

        {/* Menus For Sidebar */}
        <MenusSidebar/>

    </div>
  )
}

export default Sidebar