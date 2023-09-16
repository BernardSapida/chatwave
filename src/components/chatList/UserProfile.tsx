"use client"

import { FunctionComponent } from 'react';

import { Button, User } from "@nextui-org/react";

import { AiOutlineSetting } from 'react-icons/ai';

import style from '@/public/styles/ChatList/userProfile'

interface UserProfileProps {

}

const UserProfile: FunctionComponent<UserProfileProps> = () => {
    return (
        <div className={style.userProfile}>
            <User
                name={<p className={style.name}>Bernard Sapida</p>}
                description={<small className={style.status}>Active Now</small>}
                avatarProps={{
                    src: '/images/profile_pictures/bernardsapida.jpg'
                }}
            />
            <Button isIconOnly className='border-1 bg-white'>
                <AiOutlineSetting className={style.setting} />
            </Button>
        </div>
    );
}

export default UserProfile;