'use client'

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

import { FunctionComponent } from 'react';
import { HiOutlineSun } from 'react-icons/hi';
import { LuMessagesSquare } from 'react-icons/lu';
import { TbLogout, TbMessageCircleX } from 'react-icons/tb';
import { BsPersonGear, BsPersonAdd, BsMoonStars } from 'react-icons/bs';
import { MdOutlinePersonSearch } from 'react-icons/md';
import { AiOutlineSetting } from 'react-icons/ai';

import AllModals from '../modal/AllModals';

import style from '@/public/styles/ChatList/settingDropdown'

interface SettingDropdowProps {

}

const SettingDropdown: FunctionComponent<SettingDropdowProps> = () => {
    const { theme, setTheme } = useTheme();
    const myProfileModalDisclosure = useDisclosure();
    const addFriendModalDisclosure = useDisclosure();
    const friendRequestModalDisclosure = useDisclosure();
    const archivedChatsModalDisclosure = useDisclosure();
    const messageRequestModalDisclosure = useDisclosure();

    const themeHandler = (isSelected: boolean) => {
        setTheme(isSelected ? 'dark' : 'light')
    }

    return (
        <>
            <Dropdown>
                <DropdownTrigger>
                    <Button isIconOnly className={style.button}>
                        <AiOutlineSetting className={style.setting} />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    variant="faded"
                    aria-label="Dropdown menu with icons"
                >
                    <DropdownSection
                        title="Theme"
                        aria-label="general"
                        showDivider
                    >
                        <DropdownItem
                            key="theme"
                            startContent={
                                <Switch
                                    defaultSelected
                                    size="sm"
                                    color="default"
                                    startContent={<BsMoonStars />}
                                    endContent={<HiOutlineSun />}
                                    onValueChange={themeHandler}
                                />
                            }
                            textValue={'theme'}
                            isReadOnly
                        >
                            <small>{`${theme?.slice(0, 1).toUpperCase()}${theme?.slice(1)}`} mode</small>
                        </DropdownItem>

                    </DropdownSection>
                    <DropdownSection
                        title="General"
                        aria-label="general"
                        showDivider
                    >
                        <DropdownItem
                            key="Profile"
                            startContent={<BsPersonGear className={style.icon} />}
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