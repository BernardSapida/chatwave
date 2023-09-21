export default {
    section: [
        'w-full',
        'h-screen',
        // 'hidden',
        'absolute',
        'top-0',
        'left-0',
        'bg-white',
        'dark:bg-[#121212]',
        'z-10',

        'md:relative',
    ].join(' '),
    chatWindowHeader: [
        'p-3',
        'flex',
        'justify-between',
        'items-center',
        'border-b-1',
        'border-default-200',
        'h-14'
    ].join(' '),
    userProfileContainer: [
        'flex',
        'justify-center'
    ].join(' '),
    btnBack: [
        'my-auto',
        'block',
        'flex',
        'items-center',
        'text-lg',
        'bg-default-0',

        'md:hidden',
    ].join(' '),
    name: [
        'text-xs',
        'font-medium'
    ].join(' '),
    status: (online: boolean) => [
        'text-xs',
        online ? 'text-green-600' : 'text-default-500'
    ].join(' '),
    btnInfo: [
        'text-xl',
        'bg-default-0',
    ].join(' '),
    conversationOuterCointainer: [
        'h-[calc(100vh-3.5rem)]',
        'flex',
        'flex-col',
    ].join(' '),
    conversationInnerCointainer: [
        'h-full',
        'overflow-y-auto',
        'p-2',
        'flex',
        'flex-col',
        'gap-1',
    ].join(' '),
    box: ['h-full'].join(' '),
    friendChatContainer: [
        'flex',
        'items-end',
        'gap-1'
    ].join(' '),
    friendProfileContainer: [
        'rounded-full',
        'h-[40px]',
        'w-[40px]'
    ].join(' '),
    friendMessage: [
        'p-2',
        'rounded',
        'w-auto',
        'max-w-sm',
        'shadow-md',
        'bg-default-100'
    ].join(' '),
    userMessager: [
        'ml-auto',
        'p-2',
        'rounded',
        'w-auto',
        'max-w-sm',
        'bg-default-300',
        'text-default-900'
    ].join(' '),
    textareaContainer: [
        'px-1',
        'h-max',
        'flex',
        'items-end',
        'gap-1',
        'w-full',
        'dark:bg-[#121212]',
        'bg-white',
        'border-t-1'
    ].join(' '),
    textarea: {
        inputWrapper: [
            "shadow-xl",
            "h-max",
            'border-1',
        ],
    },
    sendBtn: [
        'mb-1'
    ].join(' '),
}