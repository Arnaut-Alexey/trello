export interface IButtonProps {
    children: JSX.Element | JSX.Element[] | string,
    isDisabled?: boolean,
    type?: 'button' | 'submit' | 'link',
    path?: string,
    size?: 'sm' | 'md',
    onClick?: () => void,
}