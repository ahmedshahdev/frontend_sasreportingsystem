// React Import
import React from 'react'

// Other Libraries

// Global Components

// Components

// Icons
import {MdOutlineCreateNewFolder} from 'react-icons/md';

// Assets

const MenusSidebar = () => {
    return (
      <div className="mt-20 flex flex-col gap-5">
        {/* <p className="text-a-pink text-xs font-bold">BMS</p> */}
        {
          <MenusItem
            showicon={true}
            name="Add Report"
            link="/"
            icon={<MdOutlineCreateNewFolder size="25px"  />}
          />
        }
      </div>
    );
}

// Menu Item
const MenusItem = ({name, link, icon, showicon}) => {
    return (
      <a to={link} className={'flex items-center gap-3 hover:opacity-70 text-a-gray'}>
        {showicon && icon}
        {!showicon && <div className='ml-3'></div>}
        <p className='font-bold'>{name}</p>
      </a>
    )
  }

export default MenusSidebar