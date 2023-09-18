'use client'

import { FunctionComponent } from 'react';

import { useTheme } from 'next-themes';

import {
    Dropdown,
    Switch,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
    DropdownSection,
    useDisclosure
} from "@nextui-org/react";

import { HiOutlineSun } from 'react-icons/hi';
import { AiOutlineSetting } from 'react-icons/ai';
import { LuMessagesSquare } from 'react-icons/lu';
import { MdOutlinePersonSearch } from 'react-icons/md';
import { TbLogout, TbMessageCircleX } from 'react-icons/tb';
import { BsPersonGear, BsPersonAdd, BsMoonStars, BsPersonCheck } from 'react-icons/bs';

import AllModals from '../modal/AllModals';

import style from '@/public/styles/ChatList/settingDropdown'

interface SettingDropdowProps {

}

const SettingDropdown: FunctionComponent<SettingDropdowProps> = () => {
    const { theme, setTheme } = useTheme();

    const myPreferencesDisclosure = useDisclosure();
    const myProfileModalDisclosure = useDisclosure();
    const addFriendModalDisclosure = useDisclosure();
    const friendRequestModalDisclosure = useDisclosure();
    const archivedChatsModalDisclosure = useDisclosure();
    const messageRequestModalDisclosure = useDisclosure();

    return (
        <>
            <Dropdown>
                <DropdownTrigger>
                    <Button isIconOnly>
                        <AiOutlineSetting className={style.icon} />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    variant="faded"
                    aria-label="Dropdown menu with icons"
                >
                    <DropdownSection
                        title="Preferences"
                        aria-label="preference"
                        showDivider
                    >
                        <DropdownItem
                            key="Profile"
                            startContent={<BsPersonGear className={style.icon} />}
                            onClick={myPreferencesDisclosure.onOpen}
                        >
                            My preferences
                        </DropdownItem>
                    </DropdownSection>
                    <DropdownSection
                        title="General"
                        aria-label="general"
                        showDivider
                    >
                        <DropdownItem
                            key="Profile"
                            startContent={<BsPersonCheck className={style.icon} />}
                            onClick={myProfileModalDisclosure.onOpen}
                        >
                            My profile
                        </DropdownItem>
                        <DropdownItem
                            key="Add friend "
                            startContent={<BsPersonAdd className={style.icon} />}
                            onClick={addFriendModalDisclosure.onOpen}
                        >
                            Add friend
                        </DropdownItem>
                        <DropdownItem
                            key="Friend request"
                            startContent={<MdOutlinePersonSearch className={style.icon} />}
                            onClick={friendRequestModalDisclosure.onOpen}
                        >
                            Friend request
                        </DropdownItem>
                    </DropdownSection>
                    <DropdownSection
                        title="Conversations"
                        aria-label="conversations"
                        showDivider
                    >
                        <DropdownItem
                            key="Archived chats"
                            startContent={<TbMessageCircleX className={style.icon} />}
                            onClick={archivedChatsModalDisclosure.onOpen}
                        >
                            Archived chats
                        </DropdownItem>
                        <DropdownItem
                            key="Message request"
                            startContent={<LuMessagesSquare className={style.icon} />}
                            onClick={messageRequestModalDisclosure.onOpen}
                        >
                            Message request
                        </DropdownItem>
                    </DropdownSection>
                    <DropdownSection
                        aria-label="Logout"
                    >
                        <DropdownItem
                            key="logout"
                            startContent={<TbLogout className={style.icon} />}
                        >
                            Logout
                        </DropdownItem>
                    </DropdownSection>
                </DropdownMenu>
            </Dropdown>
            <AllModals
                myPreferencesDisclosure={myPreferencesDisclosure}
                myProfileModalDisclosure={myProfileModalDisclosure}
                addFriendModalDisclosure={addFriendModalDisclosure}
                friendRequestModalDisclosure={friendRequestModalDisclosure}
                archivedChatsModalDisclosure={archivedChatsModalDisclosure}
                messageRequestModalDisclosure={messageRequestModalDisclosure}
            />
        </>
    );
}

export default SettingDropdown;