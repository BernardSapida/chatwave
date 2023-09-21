'use client'

import { FunctionComponent, useState, } from 'react';

import { AiOutlineEdit } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { LiaTimesSolid } from 'react-icons/lia';

import { Button, Input, Avatar } from '@nextui-org/react';

import style from '@/public/styles/ChatSetting/editNickname'

interface EditUserNicknameProps {
    user: User
}

const EditUserNickname: FunctionComponent<EditUserNicknameProps> = ({ user }) => {
    const [activeEdit, setActiveEdit] = useState<boolean>(false);

    const updateNickname = () => {
        console.log('Nickname updated');
        setActiveEdit(false);
    }

    return (
        <div className={style.container}>
            <div className={style.userContainer}>
                <Avatar
                    src={`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${user.image_public_id}`}
                    size='md'
                />
                {
                    activeEdit ?
                        <div className={style.nameContainer}>
                            <Input
                                size='sm'
                                type='text'
                                label='Nickname'
                                defaultValue={user.nickname}
                            />
                        </div> :
                        <div className={style.nameContainer}>
                            <p className={style.nickname}>{user.nickname}</p>
                            <p className={style.fullname}>{user.firstname} {user.lastname}</p>
                        </div>
                }
            </div>
            {
                activeEdit ?
                    <div className={style.btnContainer}>
                        <Button
                            className={style.btn}
                            onClick={() => updateNickname()}
                            isIconOnly
                        >
                            <BsCheckLg className={style.icon} />
                        </Button>
                        <Button
                            className={style.cancelBtn}
                            onClick={() => setActiveEdit(false)}
                            isIconOnly
                        >
                            <LiaTimesSolid className={style.icon} />
                        </Button>
                    </div> :
                    <Button
                        className={style.btn}
                        onClick={() => setActiveEdit(true)}
                        isIconOnly
                    >
                        <AiOutlineEdit className={style.icon} />
                    </Button>
            }
        </div>
    );
}

export default EditUserNickname;