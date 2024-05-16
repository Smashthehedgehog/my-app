import { useState } from 'react';


export default function SidebarItem ({item}) {
    const [open, setOpen] = useState(false)

    if (item.childrens) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} >
                <div className="sidebar-title d-flex justify-content-between m-2">
                    <span className='headline-5-medium'>
                        {item.icon && <i className={item.icon}></i> } 
                        {item.title}
                    </span>
                    <i class="bi bi-chevron-compact-down toggle-btn"></i>
                </div>
                <div className='sidebar-content'>
                { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    } else {
        return (
            <a href={item.path || "#"} className="d-flex sidebar-item no-decoration text-dark">
                <div className="sidebar-title d-flex justify-content-between m-2">
                    <span className='headline-5-medium'>
                        {item.icon && <i className={item.icon}></i> }
                        {item.title}
                    </span>
                </div>
            </a>
        )
    }
}