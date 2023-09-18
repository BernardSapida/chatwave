"use client"

import { FunctionComponent } from 'react';

import { BsThreeDotsVertical } from 'react-icons/bs';

import { Avatar, Button, Textarea, User } from '@nextui-org/react';

import style from '@/public/styles/window/chatWindow'

interface ChatWindowProps {

}

const ChatWindow: FunctionComponent<ChatWindowProps> = () => {
    return (
        <section className={style.section}>
            <div className={style.chatWindowHeader}>
                <div className='flex items-center'>
                    <User
                        name={<p className={style.name}>Bernard Sapida</p>}
                        description={<small className={style.status}>Active Now</small>}
                        avatarProps={{
                            src: 'https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/241511430_129082269454219_8671826391677060465_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGPtQC6GeoYXJPCHTRp_ou7xiKEyAMjNNnGIoTIAyM02SkntEoZ1raWq-NZurRZKBXxgSZAexfhmXzweqY-3tbE&_nc_ohc=IoOOZxdC5ncAX8OwXPe&_nc_ht=scontent.fmnl30-1.fna&oh=00_AfCUW91-ShKgNAIVa33dYTC75HSmSSg0ZjVqu4pMfRWqLg&oe=650CECA9'
                        }}
                    />
                </div>
                <BsThreeDotsVertical />
            </div>
            <div className='h-[calc(100vh-3.5rem)] flex flex-col'>
                <div className='h-full overflow-y-auto p-2 flex flex-col gap-1'>
                    <div className='flex items-end gap-1'>
                        <div className='rounded-ful h-[40px] w-[40px]'></div>
                        <p className='p-2 rounded w-auto max-w-sm shadow-md bg-default-100'>Brooooo</p>
                    </div>
                    <div className='flex items-end gap-1'>
                        <div className='rounded-full h-[40px] w-[40px]'></div>
                        <p className='p-2 rounded w-auto max-w-sm shadow-md bg-default-100'>Are you up?</p>
                    </div>
                    <div className='flex items-end gap-1'>
                        <div className='rounded-full h-[40px] w-[40px]'>
                            <Avatar src="https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/241511430_129082269454219_8671826391677060465_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGPtQC6GeoYXJPCHTRp_ou7xiKEyAMjNNnGIoTIAyM02SkntEoZ1raWq-NZurRZKBXxgSZAexfhmXzweqY-3tbE&_nc_ohc=IoOOZxdC5ncAX8OwXPe&_nc_ht=scontent.fmnl30-1.fna&oh=00_AfCUW91-ShKgNAIVa33dYTC75HSmSSg0ZjVqu4pMfRWqLg&oe=650CECA9" size='sm' />
                        </div>
                        <p className='p-2 rounded w-auto max-w-sm shadow-md bg-default-100'>I'm free</p>
                    </div>
                    <div className='ml-auto p-2 rounded w-auto max-w-sm bg-default-300 text-default-900'>
                        <p>Ay sige sige HAHAHA</p>
                    </div>
                    <div className='ml-auto p-2 rounded w-auto max-w-sm bg-default-300 text-default-900'>
                        <p>Goodluck bro</p>
                    </div>
                    <div className='ml-auto p-2 rounded w-auto max-w-sm bg-default-300 text-default-900'>
                        <p>Laro nalang later</p>
                    </div>
                    <div className='flex items-end gap-1'>
                        <div className='rounded-ful h-[40px] w-[40px]'></div>
                        <p className='p-2 rounded w-auto max-w-sm shadow-md bg-default-100'>Brooooo</p>
                    </div>
                    <div className='flex items-end gap-1'>
                        <div className='rounded-full h-[40px] w-[40px]'></div>
                        <p className='p-2 rounded w-auto max-w-sm shadow-md bg-default-100'>Are you up?</p>
                    </div>
                    <div className='flex items-end gap-1'>
                        <div className='rounded-full h-[40px] w-[40px]'>
                            <Avatar src="https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/241511430_129082269454219_8671826391677060465_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeGPtQC6GeoYXJPCHTRp_ou7xiKEyAMjNNnGIoTIAyM02SkntEoZ1raWq-NZurRZKBXxgSZAexfhmXzweqY-3tbE&_nc_ohc=IoOOZxdC5ncAX8OwXPe&_nc_ht=scontent.fmnl30-1.fna&oh=00_AfCUW91-ShKgNAIVa33dYTC75HSmSSg0ZjVqu4pMfRWqLg&oe=650CECA9" size='sm' />
                        </div>
                        <p className='p-2 rounded w-auto max-w-sm shadow-md bg-default-100'>I'm free</p>
                    </div>
                    <div className='ml-auto p-2 rounded w-auto max-w-sm bg-default-300 text-default-900'>
                        <p>Yow!</p>
                    </div>
                    <div className='ml-auto p-2 rounded w-auto max-w-sm bg-default-300 text-default-900'>
                        <p>Tagal mo magyaya HAHAHA</p>
                    </div>
                    <div className='ml-auto p-2 rounded w-auto max-w-sm bg-default-300 text-default-900'>
                        <p>Ako na jungle HAHAHAHA</p>
                    </div>
                </div>
                <div className='px-1 h-max flex items-end gap-1 w-full dark:bg-[#121212] bg-white border-t-1'>
                    <Textarea
                        placeholder="Type your message"
                        minRows={1}
                        maxRows={3}
                        classNames={{
                            inputWrapper: [
                                "shadow-xl",
                                "h-max",
                                'border-1',
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