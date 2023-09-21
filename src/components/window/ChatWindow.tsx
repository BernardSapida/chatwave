'use client'

import { Dispatch, FunctionComponent, SetStateAction, useEffect, useState } from 'react';

import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import { Avatar, Button, Textarea, User } from '@nextui-org/react';

import style from '@/public/styles/window/chatWindow'
import Link from 'next/link';

interface ChatWindowProps {
    conversation: Conversation,
    user: User,
    friend: User,
    setShowSetting: Dispatch<SetStateAction<boolean>>
}

const ChatWindow: FunctionComponent<ChatWindowProps> = ({ conversation, user, friend, setShowSetting }) => {
    const [messages, setMessages] = useState<Message[]>();

    useEffect(() => setMessages(conversation?.messages), []);

    const appendMessage = (message: Message) => {
        setMessages(prevMessages => [...prevMessages!, message]);
    }

    return (
        <section className={style.section}>
            <div className={style.chatWindowHeader}>
                <div className={style.userProfileContainer}>
                    <Button
                        as={Link}
                        className={style.btnBack}
                        href="/chat"
                        isIconOnly
                    >
                        <BsArrowLeft />
                    </Button>
                    <User
                        name={<p className={style.name}>{friend?.firstname} {friend?.lastname}</p>}
                        description={<small className={style.status(friend?.online!)}>{friend?.online ? 'Active Now' : 'Offline'}</small>}
                        avatarProps={{
                            src: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${friend?.image_public_id}`
                        }}
                    />
                </div>
                <Button
                    className={style.btnInfo}
                    onClick={() => setShowSetting(prevState => !prevState)}
                    isIconOnly
                >
                    <AiOutlineInfoCircle />
                </Button>
            </div>
            <div className={style.conversationOuterCointainer}>
                <div className={style.conversationInnerCointainer}>
                    <div className={style.box}></div>
                    {
                        messages?.map((message: Message, index: number, arr: Message[]) => (
                            message.sender_id === user?._id ? (
                                <div key={message._id} className={style.userMessager}>
                                    <p>{message.message}</p>
                                </div>
                            ) : (
                                <div key={message._id} className={style.friendChatContainer}>
                                    <div className={style.friendProfileContainer}>
                                        {
                                            arr[index + 1] === undefined || arr[index + 1].sender_id === user._id ?
                                                <Avatar src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${friend?.image_public_id}`} size='sm' /> :
                                                <></>
                                        }
                                    </div>
                                    <p className={style.friendMessage}>{message.message}</p>
                                </div>
                            )
                        ))
                    }
                </div>
                <div className={style.textareaContainer}>
                    <Textarea
                        placeholder='Type your message'
                        minRows={1}
                        maxRows={3}
                        classNames={style.textarea}
                        size='md'
                    />
                    <Button color='primary' className={style.sendBtn} size='lg'>Send</Button>
                </div>
            </div>
        </section>
    );
}

export default ChatWindow;