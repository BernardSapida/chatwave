"use client"

import { FunctionComponent, useEffect, useState } from 'react';

import { BiSearch } from 'react-icons/bi';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, User, Input } from "@nextui-org/react";

import style from '@/public/styles/ChatSetting/customizationOptions'

interface AddFriendModal {
    addFriendModalDisclosure: Disclosure
}

const AddFriendModal: FunctionComponent<AddFriendModal> = ({ addFriendModalDisclosure }) => {
    const { isOpen, onOpenChange } = addFriendModalDisclosure;
    const [users, setUsers] = useState<User[]>([]);
    const [addedUsers, setAddedUsers] = useState<User[]>([]);

    useEffect(() => {
        // Data sample
        const users: User[] = [
            {
                _id: '1',
                firstname: 'Bernard',
                lastname: 'Sapida',
                email: 'bernardsapida@gmail.com',
                image_public_id: 'display-pictures/lyv8fagduswrloey8mpb'
            },
            {
                _id: '2',
                firstname: 'Nicole',
                lastname: 'Sapida',
                email: 'NicoleSapida@gmail.com',
                image_public_id: 'display-pictures/svyk0zmcltnytwyuebpg'
            }
        ];

        setUsers(users);
    }, []);

    const handleAdd = (user: User) => {
        // Add to user friends request
        console.log(user);

        // Update state
        setAddedUsers(prevAddedUsers => [user, ...prevAddedUsers]);
    }

    const handleCancel = (user: User) => {
        // Remove to user friends request
        console.log(user);

        // Update state
        setAddedUsers(prevAddedUsers => prevAddedUsers.filter(currentUser => currentUser._id != user._id));
    }

    const isUserAdded = (user: User): boolean => {
        for (let addedUser of addedUsers) {
            if (addedUser.email === user.email) return true;
        }

        return false;
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
                    {(onClose) => (
                        <>
                            <ModalHeader className={style.modalHeader}>Add friend</ModalHeader>
                            <ModalBody className={style.modalBody}>
                                <Input
                                    label="Search"
                                    radius="lg"
                                    placeholder="Search friends"
                                    startContent={
                                        <BiSearch className={style.searchIcon} />
                                    }
                                    isClearable
                                />
                                <p className={style.label}>Found users:</p>
                                {
                                    users?.length > 0 ?
                                        users?.map((user: User) => (
                                            <div
                                                key={user._id}
                                                className={style.userContainer}
                                            >
                                                <User
                                                    name={`${user.firstname} ${user.lastname}`}
                                                    description={user.email}
                                                    avatarProps={{
                                                        src: `${process.env.NEXT_PUBLIC_CLOUDINARY_URL}/${user.image_public_id}`
                                                    }}
                                                />
                                                {
                                                    isUserAdded(user) ?
                                                        <Button
                                                            color={'default'}
                                                            onClick={() => handleCancel(user)}
                                                        >
                                                            Cancel
                                                        </Button> :
                                                        <Button
                                                            color={'primary'}
                                                            onClick={() => handleAdd(user)}
                                                        >
                                                            Add friend
                                                        </Button>

                                                }
                                            </div>
                                        )) :
                                        <p className={style.placeholder}>No user found</p>
                                }
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default AddFriendModal;