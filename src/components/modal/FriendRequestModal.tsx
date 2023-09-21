"use client"

import { FunctionComponent, useEffect, useState } from 'react';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, User } from "@nextui-org/react";

import style from '@/public/styles/ChatSetting/customizationOptions'

interface FriendRequestModal {
    friendRequestModalDisclosure: Disclosure
}

const FriendRequestModal: FunctionComponent<FriendRequestModal> = ({ friendRequestModalDisclosure }) => {
    const { isOpen, onOpenChange } = friendRequestModalDisclosure;
    const [friendRequest, setFriendRequest] = useState<User[]>([]);
    const [rejectedUsers, setRejectedUsers] = useState<User[]>([]);
    const [confirmedUsers, setConfirmedUsers] = useState<User[]>([]);

    useEffect(() => {
        // Data sample
        const friendRequest: User[] = [
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

        setFriendRequest(friendRequest);
    }, []);

    const handleConfirm = (user: User) => {
        // Add to user friends
        console.log("Confirmed");
        console.log(user);

        // Update state
        setConfirmedUsers(prevConfirmedUsers => [user, ...prevConfirmedUsers]);
    }

    const handleDelete = (user: User) => {
        // Remove to user friends request
        console.log("Removed");
        console.log(user);

        // Update state
        setRejectedUsers(prevRejectedUsers => [user, ...prevRejectedUsers]);
    }

    const isUserRejected = (user: User): boolean => {
        for (let rejectedUser of rejectedUsers) {
            if (rejectedUser.email === user.email) return true;
        }

        return false;
    }

    const isUserConfirmed = (user: User): boolean => {
        for (let confirmedUser of confirmedUsers) {
            if (confirmedUser.email === user.email) return true;
        }

        return false;
    }

    const renderButtons = (user: User) => {
        if (isUserRejected(user)) {
            return (
                <Button
                    color={'default'}
                    disabled
                >
                    Removed request
                </Button>
            )
        } else if (isUserConfirmed(user)) {
            return (
                <Button
                    color={'default'}
                    disabled
                >
                    Confirmed
                </Button>
            )
        } else {
            return (
                <>
                    <Button
                        color={'default'}
                        onClick={() => handleDelete(user)}
                    >
                        Delete
                    </Button>
                    <Button
                        color={'primary'}
                        onClick={() => handleConfirm(user)}
                    >
                        Confirm
                    </Button>
                </>
            )
        }
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
                    <ModalHeader className={style.modalHeader}>Friend request</ModalHeader>
                    <ModalBody className={style.modalBody}>
                        {
                            friendRequest?.length > 0 ?
                                friendRequest?.map((user: User) => (
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
                                        <div className={'flex gap-1'}>
                                            {
                                                renderButtons(user)
                                            }

                                        </div>
                                    </div>
                                )) :
                                <p className={style.placeholder}>No friend request</p>
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default FriendRequestModal;