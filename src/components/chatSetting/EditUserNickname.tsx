"use client"

import { FunctionComponent, useState, } from 'react';

import { AiOutlineEdit } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { LiaTimesSolid } from 'react-icons/lia';

import { Button, Input, Avatar } from "@nextui-org/react";

import style from '@/public/styles/ChatSetting/editNickname'

interface EditUserNicknameProps {

}

const EditUserNickname: FunctionComponent<EditUserNicknameProps> = () => {
    const [activeEdit, setActiveEdit] = useState<boolean>(false);

    const updateNickname = () => {
        console.log("Nickname updated");
        setActiveEdit(false);
    }

    return (
        <div className={style.container}>
            <div className='flex items-center gap-2 w-full'>
                <div className='w-max'>
                    <Avatar
                        src="/images/profile_pictures/bernardsapida.jpg"
                        size="md"
                    />
                </div>
                {
                    activeEdit ?
                        <div className='w-full'>
                            <Input
                                size='sm'
                                type="text"
                                label="Nickname"
                            />
                        </div> :
                        <div className='w-full'>
                            <p className={style.nickname}>Bernard Sapida</p>
                            <p className='leading-none text-xs text-default-400'>Bernard Sapida</p>
                        </div>
                }
            </div>
            {
                activeEdit ?
                    <div className='flex gap-1'>
                        <Button isIconOnly className='border-1 border-green-600' onClick={() => updateNickname()}>
                            <BsCheckLg className={style.checkIcon} />
                        </Button>
                        <Button isIconOnly className='border-1 border-red-600' onClick={() => setActiveEdit(false)}>
                            <LiaTimesSolid className={style.cancelIcon} />
                        </Button>
                    </div> :
                    <Button isIconOnly className='border-1 bg-default-100' onClick={() => setActiveEdit(true)}>
                        <AiOutlineEdit className={style.editIcon} />
                    </Button>
            }
        </div>
    );
}

export default EditUserNickname;