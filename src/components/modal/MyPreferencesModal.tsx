"use client"

import { FunctionComponent } from 'react';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter, User, Input, Switch } from "@nextui-org/react";

import { useTheme } from 'next-themes';
import { initialValues, validationSchema } from '@/src/helpers/contactValidation';
import styles from '@/public/styles/Profile/editProfile'
import style from '@/public/styles/ChatSetting/customizationOptions'
import axios from 'axios';
import { Formik } from 'formik';
import InputField from '../form/InputField';
import { BiSearch } from 'react-icons/bi';
import { BsMoonStars } from 'react-icons/bs';
import { HiOutlineSun } from 'react-icons/hi';
import { IoColorPaletteOutline, IoRadioButtonOnSharp } from 'react-icons/io5';

interface MyPreferencesModal {
    myPreferencesDisclosure: Disclosure
}

const MyPreferencesModal: FunctionComponent<MyPreferencesModal> = ({ myPreferencesDisclosure }) => {
    const { isOpen, onClose, onOpenChange } = myPreferencesDisclosure;
    const { theme, setTheme } = useTheme();

    const themeHandler = (isSelected: boolean) => {
        setTheme(isSelected ? 'dark' : 'light')
    }

    const statusHandler = (isSelected: boolean) => {
        // setTheme(isSelected ? 'dark' : 'light')
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement={'center'}
                scrollBehavior={'inside'}
            // portalContainer={true}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className={style.modalHeader}>
                                My preferences
                            </ModalHeader>
                            <ModalBody className={style.modalBody}>
                                <div className='flex justify-between items-center py-2'>
                                    <p><IoRadioButtonOnSharp className='text-2xl inline-block mr-2 mb-0.5' />Active Status: ON</p>
                                    <Switch
                                        size="sm"
                                        color="success"
                                        onValueChange={statusHandler}
                                    />
                                </div>
                                <div className='flex justify-between items-center py-2'>
                                    <p><IoColorPaletteOutline className='text-2xl inline-block mr-2 mb-0.5' />Current Theme: {`${theme?.slice(0, 1).toUpperCase()}${theme?.slice(1)}`}</p>
                                    <Switch
                                        defaultSelected
                                        size="sm"
                                        color="default"
                                        startContent={<BsMoonStars />}
                                        endContent={<HiOutlineSun />}
                                        onValueChange={themeHandler}
                                        isSelected={theme == 'dark'}
                                    />
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default MyPreferencesModal;