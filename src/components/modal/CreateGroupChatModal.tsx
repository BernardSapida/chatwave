'use client'

import { FunctionComponent, useEffect, useState } from 'react';

import { BiSearch } from 'react-icons/bi';

import { Modal, ModalContent, ModalHeader, ModalBody, Button, ModalFooter, User, Input, Chip } from '@nextui-org/react';

import style from '@/public/styles/ChatSetting/customizationOptions'

interface CreateGroupChatModal {
    createGroupChatDisclosure: Disclosure
}

const CreateGroupChatModal: FunctionComponent<CreateGroupChatModal> = ({ createGroupChatDisclosure }) => {
    const { isOpen, onClose, onOpenChange } = createGroupChatDisclosure;
    const [friends, setFriends] = useState<User[]>([]);
    const [friendsToAdd, setFriendsToAdd] = useState<User[]>([]);

    useEffect(() => {
        // Data sample
        const userFriends: User[] = [
            {
                _id: '1',
                firstname: 'Bernard',
                lastname: 'Sapida',
                email: 'bernardsapida@gmail.com',
                image_public_id: 'display-pictures/lyv8fagduswrloey8mpb'
            },
            {
                _id: '2',
                firstname: 'Jullianne',
                lastname: 'Cabagay',
                email: 'julliannecabagay@gmail.com',
                image_public_id: 'display-pictures/svyk0zmcltnytwyuebpg'
            }
        ];

        setFriends(userFriends);
    }, []);

    const handleClose = (email: string): void => {
        setFriendsToAdd(friendsToAdd.filter((friend: User) => friend.email !== email));
    }

    const isFriendInserted = (friend: User): boolean => {
        for (let currentFriend of friendsToAdd) {
            if (currentFriend.email === friend.email) return true;
        }

        return false;
    }

    const insertFriend = (friend: User): void => {
        setFriendsToAdd(prevFriends => [friend, ...prevFriends])
    }

    const createGroup = (): void => {
        if (friendsToAdd.length === 0) {
            console.log("No friends to add")
            return;
        }

        const friendsIds = getFriendsIds(friendsToAdd);

        //  Save to database
        console.log(friendsIds);

        onClose();
    }

    const getFriendsIds = (friends: User[]): string[] => {
        return friends.map(friend => friend._id!);
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
                    <ModalHeader className={style.modalHeader}>Create group chat</ModalHeader>
                    <ModalBody className={style.modalBody}>
                        <Input
                            label='Search'
                            radius='lg'
                            placeholder='Search friends'
                            startContent={
                                <BiSearch className={style.searchIcon} />
                            }
                            isClearable
                        />
                        <p className={style.label}>Friends to add:</p>
                        <div className='flex flex-wrap gap-1'>
                            {
                                friendsToAdd.length > 0 ?
                                    friendsToAdd?.map((friend, index) => (
                                        <Chip key={index} onClose={() => handleClose(friend.email)} variant='flat'>
                                            {`${friend.firstname} ${friend.lastname}`}
                                        </Chip>
                                    )) :
                                    <p className={style.placeholder}>No friends to add yet</p>
                            }
                        </div>
                        <p className={style.label}>Found users:</p>
                        {
                            friends?.length > 0 ?
                                friends?.map((friend: User) => {
                                    const isAddedToGroup = isFriendInserted(friend);

                                    return <div key={friend._id} className={style.friendContainer}>
                                        <User
                                            name={`${friend.firstname} ${friend.lastname}`}
                                            avatarProps={{
                                                src: `https://res.cloudinary.com/dwwdihklx/image/upload/v1695042382/${friend.image_public_id}.jpg`
                                            }}
                                        />
                                        <Button
                                            color={isAddedToGroup ? 'default' : 'primary'}
                                            onClick={() => insertFriend(friend)}
                                            disabled={isAddedToGroup}
                                        >{isAddedToGroup ? 'Added' : 'Add'}</Button>
                                    </div>
                                }) :
                                <p className={style.placeholder}>No friends found</p>
                        }
                    </ModalBody>
                    <ModalFooter className={style.modalFooter}>
                        <Button
                            type='submit'
                            color='primary'
                            onClick={createGroup}
                        >
                            Create group
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CreateGroupChatModal;