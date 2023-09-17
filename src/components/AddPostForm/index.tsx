import React, { useState } from 'react'
import { Input } from '../../UI/Input';
import style from './style.module.css';
import { addNewPost } from '../../store/postsSlice';
import { useAppDispatch } from '../../hooks';

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      id: Date.now().toString(),
      userId: Date.now().toString(),
      title: title,
      body: body
    }
    dispatch(addNewPost(data))
    setTitle('');
    setBody('');
  }
  return (
    <form className={style.formWrap} onSubmit={handleSubmit}>
      <Input onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Введите заголовок поста' value={title}/>
      <Input onChange={(e) => setBody(e.target.value)} type='textarea' placeholder='Введите текст поста' value={body}/>
      <button type='submit'>Отправить</button>
    </form>
  )
}
