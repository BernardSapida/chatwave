export default {
    section: (show: boolean) => [
        'absolute',
        'px-2',
        'py-4',
        'w-full',
        'h-screen',
        'border-l-1',
        'border-default-200',
        'bg-white',
        'dark:bg-[#121212]',
        'z-20',
        show ? 'block' : 'hidden',

        'md:relative',
        'md:max-w-[340px]',
    ].join(' '),
    btnBack: [
        'block',
        'mx-2',
        'text-lg',
        'bg-default-0',

        'md:hidden',
    ].join(' '),
    avatarContainer: [
        'flex',
        'flex-col',
        'justify-center',
        'items-center',
        'mb-3'
    ].join(' '),
    avatar: [
        'w-20',
        'h-20',
        'mb-2',
        'text-large',
    ].join(' '),
    name: [
        'font-medium',
        'text-sm'
    ].join(' '),
    customizationContainer: [
        'w-full',
    ].join(' '),
    category: [
        'mx-2',
        'font-medium',
        'text-xs',
        'text-default-500',
    ].join(' '),
    cameraIcon: [
        'h-4',
        'w-4',
        'cursor-pointer',
    ].join(' '),
    badge: [
        'h-8',
        'w-8',
        'bottom-5',
        'right-3',
    ].join(' '),
}