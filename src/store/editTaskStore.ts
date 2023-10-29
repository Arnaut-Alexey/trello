import { makeAutoObservable } from "mobx";

class EditTaskStore {
    currTask: ICurrTaskProps = {
        title: ''
    };

    constructor() {
        makeAutoObservable(this);
    }

    editTask(title: string) {
        this.getCurrTask(title);
    }

    async getCurrTask(title: string) {
        this.currTask = {
            title: title
        }
    }
}

export const editTaskStore = new EditTaskStore();

interface ICurrTaskProps {
    title: string
}