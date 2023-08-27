import React from 'react';
import { useNavigate } from 'react-router';
import { navlist,nav } from '../utils/route/route';
import style from '../style/header.module.scss';
import { Outlet } from 'react-router';
function Header() {
  const navigate = useNavigate();
  const jump = (v:nav) => {
    console.log(v)
    navigate(v.route)
  }
  return (
    <div className={style.container}>
      <div className={style.left}>
        <p>xinghai technology</p>
        <p>星海科技</p>
      </div>
      <ul className={style.right}>
        {
          navlist.map((v,index) => {
            return <li onClick={() => jump(v)} key={index}>{v.name}</li>
          })
        }
      </ul>
      <Outlet />
    </div>
  );
}

export default Header;