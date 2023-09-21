"use client"

import { FunctionComponent } from 'react';

import { BsMoonStars } from 'react-icons/bs';
import { HiOutlineSun } from 'react-icons/hi';
import { IoColorPaletteOutline, IoRadioButtonOnSharp } from 'react-icons/io5';

import { Modal, ModalContent, ModalHeader, ModalBody, Switch } from "@nextui-org/react";

import { useTheme } from 'next-themes';

import style from '@/public/styles/ChatSetting/customizationOptions'

interface MyPreferencesModal {
    myPreferencesDisclosure: Disclosure
}

const MyPreferencesModal: FunctionComponent<MyPreferencesModal> = ({ myPreferencesDisclosure }) => {
    const { isOpen, onOpenChange } = myPreferencesDisclosure;
    const { theme, setTheme } = useTheme();

    const themeHandler = (isSelected: boolean) => {
        setTheme(isSelected ? 'dark' : 'light')
    }

    const statusHandler = (isSelected: boolean) => {
        // Update active status
        console.log(isSelected)
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement={'center'}
                scrollBehavior={'inside'}
                portalContainer={document.body}
            >
                <ModalContent>
                    <ModalHeader className={style.modalHeader}>My preferences </ModalHeader>
                    <ModalBody className={style.modalBody}>
                        <div className={style.preferencesContainer}>
                            <p><IoRadioButtonOnSharp className={style.preferencesIcons} />Active Status: ON</p>
                            <Switch
                                size="sm"
                                color="success"
                                onValueChange={statusHandler}
                            />
                        </div>
                        <div className={style.preferencesContainer}>
                            <p><IoColorPaletteOutline className={style.preferencesIcons} />Current Theme: {`${theme?.slice(0, 1).toUpperCase()}${theme?.slice(1)}`}</p>
                            <Switch
                                defaultSelected
                                size="sm"
                                color="warning"
                                startContent={<BsMoonStars />}
                                endContent={<HiOutlineSun />}
                                onValueChange={themeHandler}
                                isSelected={theme == 'dark'}
                            />
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default MyPreferencesModal;