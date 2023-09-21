interface User {
    _id?: string;
    firstname: string;
    lastname: string;
    email: string;
    image_public_id?: string;
    activeStatus?: boolean;
    not_seen_message_count?: number;
    nickname?: string;
    online?: boolean;
}