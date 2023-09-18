"use client"

import { FunctionComponent } from 'react';

import { BsFillSendFill, BsThreeDotsVertical } from 'react-icons/bs';

import { Avatar, Button, Textarea, User } from '@nextui-org/react';

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
            <div className='relative overflow-hidden h-[calc(100vh-4.05rem)]'>
                <div className='px-2 py-5 flex flex-col gap-1 overflow-y-scroll h-[calc(100vh-6.6rem)]'>
                    <div className='flex items-end gap-2'>
                        <div className='rounded-ful h-[50px] w-[50px]'></div>
                        <p className='p-2 rounded w-max max-w-lg shadow-md bg-default-100'>Hello Dariin</p>
                    </div>
                    <div className='flex items-end gap-2'>
                        <div className='rounded-full h-[50px] w-[50px]'></div>
                        <p className='p-2 rounded w-max max-w-lg shadow-md bg-default-100'>I love you</p>
                    </div>
                    <div className='flex items-end gap-2'>
                        <div className='rounded-full h-[50px] w-[50px]'>
                            <Avatar src="/images/profile_pictures/julliannecabagay.jpg" />
                        </div>
                        <p className='p-2 rounded w-max max-w-lg shadow-md bg-default-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam eveniet exercitationem saepe placeat ab fugit tempore nulla repellendus neque.</p>
                    </div>
                    <div className='ml-auto p-2 rounded w-max max-w-lg bg-default-300 text-default-900'>
                        <p>Hello Dariin!</p>
                    </div>
                    <div className='ml-auto p-2 rounded w-max max-w-lg bg-default-300 text-default-900'>
                        <p>I love you!</p>
                    </div>
                    <div className='ml-auto p-2 rounded w-max max-w-lg bg-default-300 text-default-900'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam eveniet exercitationem saepe placeat ab fugit tempore nulla repellendus neque.</p>
                    </div>
                    <div className='flex items-end gap-2'>
                        <div className='rounded-full h-[50px] w-[50px]'></div>
                        <p className='p-2 rounded w-max max-w-lg shadow-md bg-default-100'>Hello Dariin</p>
                    </div>
                    <div className='flex items-end gap-2'>
                        <div className='rounded-full h-[50px] w-[50px]'></div>
                        <p className='p-2 rounded w-max max-w-lg shadow-md bg-default-100'>I love you</p>
                    </div>
                    <div className='flex items-end gap-2'>
                        <div className='rounded-full h-[50px] w-[50px]'>
                            <Avatar src="/images/profile_pictures/julliannecabagay.jpg" />
                        </div>
                        <p className='p-2 rounded w-max max-w-lg shadow-md bg-default-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit veniam eveniet exercitationem saepe placeat ab fugit tempore nulla repellendus neque.</p>
                    </div>
                </div>
                <div className='flex gap-1 absolute items-end bottom-0 left-0 w-full z-10 dark:bg-[#121212] bg-white border-t-1'>
                    <Textarea
                        placeholder="Type your message"
                        minRows={1}
                        maxRows={3}
                        classNames={{
                            inputWrapper: [
                                "shadow-xl",
                                "h-max",
                                'border-1',
                                // 'border-zinc-800'
                            ],
                        }}
                        size='md'
                    />
                    <Button color='primary' className='mb-1' size='lg'>Send</Button>
                </div>
            </div>
        </section>
    );
}

export default ChatWindow;