interface MenuSection {
    section: {
        title: string;
        showDivider: boolean;
        menus: Menu[];
    }
}

interface Menu {
    name: string;
    icon: IconType;
    disclosure?: () => void;
}