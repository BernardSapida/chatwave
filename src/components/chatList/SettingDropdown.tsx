'use client'

import { FunctionComponent } from 'react';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { TbLogout } from 'react-icons/tb';
import { BsPersonGear } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, DropdownSection } from "@nextui-org/react";

import style from '@/public/styles/ChatList/settingDropdown'

interface SettingDropdowProps {

}

const SettingDropdown: FunctionComponent<SettingDropdowProps> = () => {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button isIconOnly className={style.button}>
                    <AiOutlineSetting className={style.setting} />
                </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
                <DropdownSection
                    title="My settings"
                    aria-label="setting"
                    showDivider
                >
                    <DropdownItem
                        key="profile"
                        startContent={<BsPersonGear className={style.icon} />}
                    >
                        My profile
                    </DropdownItem>
                    <DropdownItem
                        key="theme"
                        startContent={<IoColorPaletteOutline className={style.icon} />}
                    >
                        Theme
                    </DropdownItem>
                </DropdownSection>
                <DropdownSection title="Danger zone" aria-label="Logout">
                    <DropdownItem
                        key="logout"
                        startContent={<TbLogout className={style.icon} />}
                    >
                        Logout
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}

export default SettingDropdown;