export interface IInputProps {
    type: 'text' | 'password' | 'email',
    name: string,
    placeholder: string,
    error?: string,
    icon?: string,
}

export interface IInputTextProps {
    name: string,
    placeholder: string,
    error?: string,
    icon?: string,
}

export interface IInputEmailProps {
    name: string,
    placeholder: string,
    error?: string,
    icon?: string,
}

export interface IInputPasswordProps {
    name: string,
    placeholder: string,
    error?: string,
    icon?: string,
}