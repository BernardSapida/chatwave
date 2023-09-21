'use client'

import { FunctionComponent, useContext, useEffect, useState } from 'react';

import { Badge, Avatar } from '@nextui-org/react';

import { useRouter } from 'next/navigation';

import { UserContext } from '@/src/store/UserContext';

import style from '@/public/styles/ChatList/chat'

interface ChatProps {
    conversation: Conversation
}

const Chat: FunctionComponent<ChatProps> = ({ conversation }) => {
    if (!conversation) return <div></div>;

    const { _id, participants, messages } = conversation;
    const userContext = useContext(UserContext);
    const [friendProfile, setFriendProfile] = useState<User>();
    const [notSeenCount, setNotSeenCount] = useState<number>();
    const router = useRouter();

    useEffect(() => {
        const [friend, not_seen_message_count] = getFriendProfile();

        setFriendProfile(friend);
        setNotSeenCount(not_seen_message_count);
    }, []);

    const getFriendProfile = (): [User, number] => {
        let friend: User;
        let you: User;

        if (participants[0]._id == userContext._id) {
            you = participants[0];
            friend = participants[1];

            return [friend, you.not_seen_message_count!]
        } else {
            you = participants[1];
            friend = participants[0];

            return [friend, you.not_seen_message_count!]
        }
    }

    const getLastMessage = () => {
        return messages[0].message;
    }

    const redirectMessageWindow = () => {
        router.push(`/chat?id=${_id}`)
    }

    return (
        <div className={style.chat} onClick={redirectMessageWindow}>
            <Badge
                content={notSeenCount}
                color='danger'
                size='sm'
                shape='circle'
                isInvisible={notSeenCount == 0}
                className={style.badge(notSeenCount == 0)}
            >
                <Badge
                    content=''
                    color='success'
                    size='sm'
                    shape='circle'
                    placement='bottom-right'
                    isInvisible={!friendProfile?.online}
                >
                    <Avatar
                        radius='full'
                        src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${friendProfile?.image_public_id}`}
                        alt={`${friendProfile?.firstname} ${friendProfile?.lastname} Photo`}
                    />
                </Badge>
            </Badge>
            <div>
                <p className={style.name}>{`${friendProfile?.firstname} ${friendProfile?.lastname}`}</p>
                <p className={style.message}>{getLastMessage()}</p>
            </div>
        </div>
    );
}

export default Chat;