export interface IBoardProps {
    id: string,
    title: string,
    tasks?: { 
        id: string; 
        title: string; 
    }[] | undefined,
    isVisible: string,
    setIsVisible: (id: string) => void;
}

export interface ICreateBoardProps {
    title: HTMLTextAreaElement,
}