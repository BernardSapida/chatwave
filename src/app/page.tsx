'use client'

import { useContext, useEffect } from 'react';

import ChatList from '../components/chatList/ChatList';
import EmptyChatWindow from '../components/window/EmptyChatWindow';

import { UserContext } from '@/src/store/UserContext';

import style from '@/public/styles/main';

export default function Page() {
  const userContext = useContext(UserContext);
  const user: User = {
    _id: '1',
    firstname: 'Bernard',
    lastname: 'Sapida',
    email: 'bernardsapida1706@gmail.com',
    image_public_id: 'display-pictures/lyv8fagduswrloey8mpb'
  }

  useEffect(() => {
    userContext.setId(user._id!);
    userContext.setFirstname(user.firstname);
    userContext.setLastname(user.lastname);
    userContext.setEmail(user.email);
    userContext.setImagePublicId(user.image_public_id!);
  }, [])

  return (
    <main className={style.main}>
      <ChatList />
      <EmptyChatWindow />
    </main >
  )
}