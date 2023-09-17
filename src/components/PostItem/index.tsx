import React from 'react'
import style from './style.module.css'

interface IProps {
  id: string | number;
  userId: string | number;
  title: string;
  body: string;
}

export const PostItem: React.FC<IProps> = ({id, userId, title, body}) => {
  return (
    <li className={style.post}>
      <h3 className={style.heading}>{title}</h3>
      <p className={style.paragrath}>{body}</p>
    </li>
  )
}
