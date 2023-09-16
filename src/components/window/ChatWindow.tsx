"use client"

import { FunctionComponent } from 'react';

import { BsThreeDotsVertical } from 'react-icons/bs';

import { User } from '@nextui-org/react';

import style from '@/public/styles/window/chatWindow'

interface ChatWindowProps {

}

const ChatWindow: FunctionComponent<ChatWindowProps> = () => {
    return (
        <section className={style.section}>
            <div className={style.chatWindowHeader}>
                <div className='flex items-center gap-3'>
                    <User
                        name={<p className={style.name}>Jullianne Cabagay</p>}
                        description={<small className={style.status}>Active Now</small>}
                        avatarProps={{
                            src: '/images/profile_pictures/julliannecabagay.jpg'
                        }}
                    />
                </div>
                <BsThreeDotsVertical />
            </div>
        </section>
    );
}

export default ChatWindow;