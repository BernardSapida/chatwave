interface Conversation {
    _id: string;
    single_conversation: boolean;
    participants: User[];
    messages: Message[],
}

interface Message {
    _id?: string;
    sender_id: string;
    message: string;
    timestamp: Date;
}