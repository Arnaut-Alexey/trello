export interface IAuthLayoutProps {
    children: JSX.Element | JSX.Element[],
}

export interface ILoginProps {
    email: HTMLInputElement,
    password: HTMLInputElement,
}

export interface IResetPasswordProps {
    email: HTMLInputElement,
}

export interface ISignupProps {
    surname: HTMLInputElement,
    name: HTMLInputElement,
    email: HTMLInputElement,
    password: HTMLInputElement,
    img: string,
}