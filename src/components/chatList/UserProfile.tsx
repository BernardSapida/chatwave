"use client"

import { FunctionComponent } from 'react';

import { User } from "@nextui-org/react";

import SettingDropdown from './SettingDropdown';

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
            <SettingDropdown />
        </div>
    )
}

export default UserProfile;