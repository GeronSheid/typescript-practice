import React from 'react'
import style from './style.module.css'

interface IProps {
  placeholder?: string;
  type: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export const Input: React.FC<IProps> = ({placeholder, type, value, onChange}) => {
  return (
    <>
    {
      type === 'textarea'
      ?
      <textarea className={style.textarea} onChange={onChange} placeholder={placeholder} value={value}/>
      :
      <input className={style.input} type={`${type}`} placeholder={placeholder} onChange={onChange} value={value}/>
    }
    </>
  )
}
