import { makeAutoObservable } from "mobx";

class ModalStore {
    isActive = false;
    activeModalName = '';

    constructor() {
        makeAutoObservable(this);
    }

    openModal(name: string) {
        this.isActive = true;
        this.activeModalName = name;
    }

    closeModal() {
        this.isActive = false;
        this.activeModalName = '';
    }
}

export const modalStore = new ModalStore();