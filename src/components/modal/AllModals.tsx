import { FunctionComponent } from 'react';

import MyProfileModal from './MyProfileModal';
import AddFriendModal from './AddFriendModal';
import FriendRequestModal from './FriendRequestModal';
import ArchivedChatsModal from './ArchivedChatsModal';
import MessageRequestModal from './MessageRequestModal';
import MyPreferencesModal from './MyPreferencesModal';

interface AllModalsProps {
    myProfileModalDisclosure: Disclosure;
    addFriendModalDisclosure: Disclosure;
    friendRequestModalDisclosure: Disclosure;
    archivedChatsModalDisclosure: Disclosure;
    messageRequestModalDisclosure: Disclosure;
    myPreferencesDisclosure: Disclosure;
}

const AllModals: FunctionComponent<AllModalsProps> = ({
    myProfileModalDisclosure,
    addFriendModalDisclosure,
    friendRequestModalDisclosure,
    archivedChatsModalDisclosure,
    messageRequestModalDisclosure,
    myPreferencesDisclosure,
}) => {
    return (
        <>
            {myProfileModalDisclosure.isOpen && <MyProfileModal myProfileModalDisclosure={myProfileModalDisclosure} />}
            {addFriendModalDisclosure.isOpen && <AddFriendModal addFriendModalDisclosure={addFriendModalDisclosure} />}
            {friendRequestModalDisclosure.isOpen && <FriendRequestModal friendRequestModalDisclosure={friendRequestModalDisclosure} />}
            {archivedChatsModalDisclosure.isOpen && <ArchivedChatsModal archivedChatsModalDisclosure={archivedChatsModalDisclosure} />}
            {messageRequestModalDisclosure.isOpen && <MessageRequestModal messageRequestModalDisclosure={messageRequestModalDisclosure} />}
            {myPreferencesDisclosure.isOpen && <MyPreferencesModal myPreferencesDisclosure={myPreferencesDisclosure} />}
        </>
    );
}

export default AllModals;