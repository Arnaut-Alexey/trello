import { makeAutoObservable } from "mobx";

import { authStore } from "./authStore";
import { addDoc, collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { modalStore } from "./modalStore";

class ProjectsStore {
    projects: IProjectsProps[] = [];
    isLoading: boolean = false;
    userId = authStore.userId;

    constructor() {
        makeAutoObservable(this);
    }

    async getProjects() {
        this.isLoading = true;

        onSnapshot(query(collection(db, "projects"), where("users", "array-contains", this.userId)), (querySnapshot) => {
            const data: IProjectsProps[] = [];

            querySnapshot.forEach((doc) => {

                const { title } = doc.data();

                data.push({
                    title,
                    id: doc.id,
                });

                this.projects = data;
            });
        });

        this.isLoading = false;
    }

    async createProject(title: string, error: (txt: string) => void) {
        this.isLoading = true;

        error('');

        if (title.trim().length <= 0) {
            error('Заполните поле!');
            return;
        }

        await addDoc(collection(db, "projects"), {
            title,
            users: [this.userId]
        })

        modalStore.closeModal();
        
        this.isLoading = false;
    }
}

export const projectsStore = new ProjectsStore();

interface IProjectsProps {
    title: string,
    id: string
}