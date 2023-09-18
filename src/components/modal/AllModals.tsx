import { FunctionComponent } from 'react';

import MyPreferencesModal from './MyPreferencesModal';
import MyProfileModal from './MyProfileModal';
import AddFriendModal from './AddFriendModal';
import FriendRequestModal from './FriendRequestModal';
import ArchivedChatsModal from './ArchivedChatsModal';
import MessageRequestModal from './MessageRequestModal';

interface AllModalsProps {
    myPreferencesDisclosure: Disclosure;
    myProfileModalDisclosure: Disclosure;
    addFriendModalDisclosure: Disclosure;
    friendRequestModalDisclosure: Disclosure;
    archivedChatsModalDisclosure: Disclosure;
    messageRequestModalDisclosure: Disclosure;
}

const AllModals: FunctionComponent<AllModalsProps> = ({
    myPreferencesDisclosure,
    myProfileModalDisclosure,
    addFriendModalDisclosure,
    friendRequestModalDisclosure,
    archivedChatsModalDisclosure,
    messageRequestModalDisclosure,
}) => {
    return (
        <>
            {myPreferencesDisclosure.isOpen ? <MyPreferencesModal myPreferencesDisclosure={myPreferencesDisclosure} /> : ''}
            {myProfileModalDisclosure.isOpen ? <MyProfileModal myProfileModalDisclosure={myProfileModalDisclosure} /> : ''}
            {addFriendModalDisclosure.isOpen ? <AddFriendModal addFriendModalDisclosure={addFriendModalDisclosure} /> : ''}
            {friendRequestModalDisclosure.isOpen ? <FriendRequestModal friendRequestModalDisclosure={friendRequestModalDisclosure} /> : ''}
            {archivedChatsModalDisclosure.isOpen ? <ArchivedChatsModal archivedChatsModalDisclosure={archivedChatsModalDisclosure} /> : ''}
            {messageRequestModalDisclosure.isOpen ? <MessageRequestModal messageRequestModalDisclosure={messageRequestModalDisclosure} /> : ''}
        </>
    );
}

export default AllModals;