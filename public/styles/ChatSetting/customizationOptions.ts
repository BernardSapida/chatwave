export default {
    customizationOptions: [
        'my-1',
        'p-2',
        'rounded',
        'text-sm',
        'font-medium',
        'ease-out',
        'duration-300',
        'cursor-pointer',
        'hover:bg-default-200',
    ].join(' '),
    modalHeader: [
        'flex',
        'flex-col',
        'gap-1',
        'border-b-1',
        'border-default-100',
    ].join(' '),
    modalBody: [
        'gap-0'
    ].join(' '),
    modalFooter: [
        'border-t-1',
        'border-default-100',
    ].join(' '),
    userNicknames: [
        'flex',
        'items-center',
    ].join(' '),
    label: [
        'my-3',
        'text-tiny'
    ].join(' '),
    placeholder: [
        'text-tiny',
        'text-default-400'
    ].join(' '),
    friendContainer: [
        'mb-1',
        'p-1',
        'flex',
        'items-center',
        'justify-between',
        'ease-out',
        'duration-300',
        'rounded',

        'hover:bg-default-200',
    ].join(' '),
    optionIcon: [
        'mr-1.5',
        'inline-block',
        'text-xl',
    ].join(' '),
    editIcon: [
        'text-xl',
        'text-default-400',
    ].join(' '),
    searchIcon: [
        'text-black/50',
        'dark:text-white/90',
        'text-slate-400',
        'pointer-events-none',
        'flex-shrink-0',
    ].join(' '),

    // MyProfileModal & ChangeGroupChatPhotoModal
    form: [
        'mx-auto',
        'p-4',
        'text-2xl',
        'font-medium',
        'flex',
        'flex-col',
        'items-center',
    ].join(' '),
    photoContainer: ['mx-auto'].join(' '),
    cameraIcon: [
        'h-4',
        'w-4',
        'cursor-pointer'
    ].join(' '),
    fileInput: ['hidden'].join(' '),
    badge: [
        'h-8',
        'w-8',
        'bottom-3',
        'right-3'
    ].join(' '),
    photo: [
        'h-20',
        'w-20'
    ].join(' '),
    fullnameContainer: [
        'w-full',
        'flex',
        'gap-1',
    ].join(' '),
    emailContainer: [
        'w-full',
        'mt-2',
    ].join(' '),

    // AddFriendModal
    userContainer: [
        'flex',
        'items-center',
        'justify-between',
        'mb-3',
    ].join(' '),

    // ArchivedChatModal
    chatsContainer: [
        'flex',
        'items-center',
        'justify-between',
    ].join(' '),

    // MyPreferencesModal
    preferencesContainer: [
        'flex',
        'items-center',
        'justify-between',
        'py-2',
    ].join(' '),
    preferencesIcons: [
        'text-2xl',
        'inline-block',
        'mr-2',
        'mb-0.5',
    ].join(' '),

    // ChangeGroupChatModal
    friendsContainer: [
        'flex',
        'flex-wrap',
        'gap-1',
    ].join(' '),

    // ChangeGroupChatPhotoModal
    badgeContainer: [
        'mx-auto',
    ].join(' '),
}