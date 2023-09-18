'use client'

import { FunctionComponent } from 'react';

import { BiSolidEdit } from 'react-icons/bi';
import { LuMessagesSquare } from 'react-icons/lu';

import { Button, useDisclosure } from '@nextui-org/react';

import CreateGroupChatModal from '../modal/CreateGroupChatModal';

import style from '@/public/styles/ChatList/header'

interface HeaderProps { }

const Header: FunctionComponent<HeaderProps> = () => {
    const createGroupChatDisclosure = useDisclosure();

    return (
        <>
            <header className={style.header}>
                <div className={style.banner}>
                    <LuMessagesSquare />
                    <p>BoogieTalk</p>
                </div>
                <Button
                    isIconOnly
                    onClick={createGroupChatDisclosure.onOpen}
                >
                    <BiSolidEdit />
                </Button>
            </header>
            {createGroupChatDisclosure.isOpen && <CreateGroupChatModal createGroupChatDisclosure={createGroupChatDisclosure} />}
        </>
    );
}

export default Header;