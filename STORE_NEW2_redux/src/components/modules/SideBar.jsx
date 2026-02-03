import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import CloseCompoHelper from '../../servises/CloseCompoHelper'
import styles from './SideBar.module.css'
import { sideBarBg } from '../../servises/constants/headerConstants'

function SideBar({ setSideBar, sideBar }) {

    const sideBarRef = useRef()

    CloseCompoHelper(sideBarRef, setSideBar)

    const liWithBg = sideBarBg.filter(item => item.bgColor)
    const liJustTitle = sideBarBg.filter(item => !item.bgColor)
    const withoutLastItem = liJustTitle.slice(0, -1)
    const lastItem = liJustTitle[liJustTitle.length - 1]

    return (
        <aside className={`${styles.sideBarTransform} ${sideBar ? styles.sideBarOpen : ""} bg-gray-50 z-10 fixed overflow-y-scroll inset-y-0 right-0 w-[320px] md:w-[380px] lg:w-[510px] xl:w-[640px]`} ref={sideBarRef}>
            <nav className='p-3'>
                {
                    liWithBg.map(item => item.img ?
                        <NavLink to='' key={item.id} className={`${styles.fontBlack} flex items-center justify-between mb-3 p-3`} style={{ backgroundColor: item.bgColor }}>
                            <h3>
                                {item.title}
                            </h3>
                            <img src={item.img} alt="" className='w-1/4 h-1/4' />
                        </NavLink> :
                        <NavLink to='' key={item.id} className={`${styles.fontBlack} flex items-center justify-between px-3 pt-8 pb-11 border-b border-[#e5e1e1]`} style={{ backgroundColor: item.bgColor }}>
                            {item.title}
                        </NavLink>
                    )
                }
                {
                    withoutLastItem.map(item =>
                        <NavLink to='' key={item.id} className={`${styles.finals} ${styles.fontBlack} flex flex-col border-b border-[#e5e1e1] last:border-b-0`}>
                            {item.title}
                        </NavLink>
                    )
                }
                {
                    <NavLink to='' key={lastItem.id} className={`${styles.fontBlack} flex items-center justify-between px-3 pt-10`}>
                        {lastItem.title}
                    </NavLink>
                }

            </nav>
        </aside >
    )
}

export default SideBar