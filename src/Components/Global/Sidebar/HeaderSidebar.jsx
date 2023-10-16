// React Import
import React from 'react'

// Other Libraries

// Global Components

// Components

// Icons

// Assets
import Logo from '../../../Assets/Images/InApp/logo.png'

const HeaderSidebar = () => {
    return (
        <div className='flex items-center gap-3 bg-white p-3 rounded-md'>
            <img src={Logo} alt="" />
        </div>
    )
}

export default HeaderSidebar