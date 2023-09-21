'use client'

import { FunctionComponent } from 'react';

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
    DropdownSection,
    useDisclosure
} from '@nextui-org/react';

import { AiOutlineSetting } from 'react-icons/ai';
import { LuMessagesSquare } from 'react-icons/lu';
import { MdOutlinePersonSearch } from 'react-icons/md';
import { TbLogout, TbMessageCircleX } from 'react-icons/tb';
import { BsPersonGear, BsPersonAdd, BsPersonCheck } from 'react-icons/bs';

import AllModals from '../modal/AllModals';

import style from '@/public/styles/ChatList/settingDropdown'

interface SettingDropdowProps {

}

const SettingDropdown: FunctionComponent<SettingDropdowProps> = () => {
    const myPreferencesDisclosure = useDisclosure();
    const myProfileModalDisclosure = useDisclosure();
    const addFriendModalDisclosure = useDisclosure();
    const friendRequestModalDisclosure = useDisclosure();
    const archivedChatsModalDisclosure = useDisclosure();
    const messageRequestModalDisclosure = useDisclosure();
    const dropdownMenu: MenuSection[] = [
        {
            section: {
                title: 'General',
                showDivider: true,
                menus: [
                    {
                        name: 'My profile',
                        icon: <BsPersonCheck className={style.icon} />,
                        disclosure: myProfileModalDisclosure.onOpen
                    },
                    {
                        name: 'Add friend',
                        icon: <BsPersonAdd className={style.icon} />,
                        disclosure: addFriendModalDisclosure.onOpen
                    },
                    {
                        name: 'Friend request',
                        icon: <MdOutlinePersonSearch className={style.icon} />,
                        disclosure: friendRequestModalDisclosure.onOpen
                    },
                ]
            }
        },
        {
            section: {
                title: 'Conversations',
                showDivider: true,
                menus: [
                    {
                        name: 'Archived chats',
                        icon: <TbMessageCircleX className={style.icon} />,
                        disclosure: archivedChatsModalDisclosure.onOpen
                    },
                    {
                        name: 'Message request',
                        icon: <LuMessagesSquare className={style.icon} />,
                        disclosure: messageRequestModalDisclosure.onOpen
                    },
                ]
            }
        },
        {
            section: {
                title: 'Others',
                showDivider: false,
                menus: [
                    {
                        name: 'My preferences',
                        icon: <BsPersonGear className={style.icon} />,
                        disclosure: myPreferencesDisclosure.onOpen
                    },
                    {
                        name: 'Logout',
                        icon: <TbLogout className={style.icon} />,
                    },
                ]
            }
        }
    ]

    return (
        <>
            <Dropdown>
                <DropdownTrigger>
                    <Button isIconOnly>
                        <AiOutlineSetting className={style.icon} />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    variant='faded'
                    aria-label='Dropdown menu with icons'
                >
                    {
                        dropdownMenu?.map(({ section: { title, showDivider, menus } }) => (
                            <DropdownSection
                                key={title}
                                title={title}
                                aria-label={title}
                                showDivider={showDivider}
                            >
                                {
                                    menus?.map(({ name, icon, disclosure }) => (
                                        <DropdownItem
                                            key={name}
                                            startContent={icon}
                                            onClick={disclosure}
                                        >
                                            {name}
                                        </DropdownItem>
                                    ))
                                }
                            </DropdownSection>
                        ))
                    }
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