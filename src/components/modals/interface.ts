export interface IModalWrapperProps {
    children: JSX.Element | JSX.Element[],
    closeSize: 'sm' | 'md',
    name: string,
}

export interface ICreateProjectProps {
    title: HTMLInputElement,
}