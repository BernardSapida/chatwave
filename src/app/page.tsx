'use client'

import ChatList from '../components/chatList/ChatList';
import ChatSetting from '../components/chatSetting/ChatSetting';
import ChatWindow from '../components/window/ChatWindow';

import { useContext } from 'react';
import { AppContext } from '../store/AppContext';

export default function Page() {
  const appContext = useContext(AppContext);

  return (
    <main className='flex'>
      <ChatList />
      <ChatWindow />
      <ChatSetting />
    </main >
  )
}