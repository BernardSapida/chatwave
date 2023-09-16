import ChatList from '../components/chatList/ChatList';
import ChatSetting from '../components/chatSetting/ChatSetting';
import ChatWindow from '../components/window/ChatWindow';

export default function Home() {
  return (
    <main className='flex'>
      <ChatList />
      <ChatWindow />
      <ChatSetting />
    </main>
  )
}