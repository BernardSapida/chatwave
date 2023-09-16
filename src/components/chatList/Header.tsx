"use client"

import { FunctionComponent } from 'react';

import { LuMessagesSquare } from 'react-icons/lu';

import style from '@/public/styles/ChatList/header'

interface HeaderProps {

}

const Header: FunctionComponent<HeaderProps> = () => {
    return (
        <header className={style.header}>
            <LuMessagesSquare />
            <p>BoogieTalk</p>
        </header>
    );
}

export default Header;