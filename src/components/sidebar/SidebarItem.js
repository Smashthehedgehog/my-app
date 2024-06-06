import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function SidebarItem ({item}) {
    const [open, setOpen] = useState(false)

    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} onFocus={() => setOpen(true)} >
                <div className="sidebar-title d-flex justify-content-between m-2">
                    <span className='headline-5-medium'>
                        {item.icon && <i className={item.icon}></i> } 
                        {item.title}
                    </span>
                    <i className="bi bi-chevron-compact-down toggle-btn"></i>
                </div>
                <div className='sidebar-content'>
                { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    } else {
        return (
          <Link to={item.path} className="d-flex sidebar-item no-decoration text-dark sidebar-clickable-item">
            <div className="sidebar-title d-flex justify-content-between m-2">
              <span className='headline-5-medium'>
                {item.icon && <i className={item.icon}></i>}
                {item.title}
              </span>
            </div>
          </Link>
        )
    }
}