export interface ITextareaProps {
    name: string,
    rows: number | 'auto',
    placeholder?: string,
    size?: 'sm' | 'md',
    defaultValue?: string,
    variables?: 'primary' | 'secondary',
    onSubmit?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void | undefined,
}