export declare namespace NSComponents {
  interface IHoverMenuProps {
    menuItems: IMenuItem[];
    open: boolean;
    onClose: () => void;
  }
  interface IMenuItem {
    label: string;
    link?: string;
    onClick?: () => void;
    isNewTab?: boolean;
    isDisabled?: boolean;
  }
  interface ITab {
    label: string;
    href: string;
  }
}
