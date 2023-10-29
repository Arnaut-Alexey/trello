import { makeAutoObservable } from "mobx";

import { db } from '../firebase';
import { account } from "../appwrite";
import { storage } from "../firebase";
import { ID } from "appwrite";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

class AuthStore {
    userId: string | null = '653e9b964ba448af4cce';
    isAuth: boolean = true;
    isLoading: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    async signup(data: ISignupProps, img: File | undefined) {
        this.isLoading = true;

        const { email, password } = data;

        await account.create(ID.unique(), email.value, password.value)
            .then(res => {
                this.userId = res.$id;
                this.isAuth = true;

                this.createUserInFirebase(data, img);
                this.setUserInfo(email.value, password.value);
            }).catch(err => {
                console.log(err);
            })

        this.isLoading = false;
    }

    async login(data: ILoginProps) {
        this.isLoading = true;

        const { email, password } = data;

        await account.createEmailSession(email.value, password.value).then(res => {
            this.userId = res.$id;
            this.isAuth = true;

            this.setUserInfo(email.value, password.value);
        }).catch(err => {
            console.log(err);
        });

        this.isLoading = false;
    }

    async createUserInFirebase(data: ISignupProps, img: File | undefined) {
        this.isLoading = true;

        let url: string = '';

        if (img) {
            const imgRef = ref(
                storage,
                `users/${new Date().getTime()} - ${img.name}`
            )

            const snap = await uploadBytes(imgRef, img);
            url = await getDownloadURL(ref(storage, snap.ref.fullPath));
        }

        await addDoc(collection(db, "users"), {
            userId: this.userId,
            name: data.name.value,
            surname: data.surname.value,
            email: data.email.value,
            password: data.password.value,
            avatar: url,
        });

        this.isLoading = false;
    }

    async createSession() {
        this.isLoading = true;

        const userJson = localStorage.getItem('TrelloUser');

        if (userJson) {
            const data = JSON.parse(userJson);

            account.createEmailSession(data.email, data.password).then(res => {
                console.log(res);
                
                this.userId = res.$id;
                this.isAuth = true;
            }).catch(err => {
                console.log(err);
                this.isAuth = false;
            });
        }

        this.isLoading = false;
    }

    setUserInfo(email: string, password: string) {
        localStorage.setItem('TrelloUser', JSON.stringify({ email, password }));
    }
}

export const authStore = new AuthStore();

interface ISignupProps {
    email: HTMLInputElement,
    password: HTMLInputElement,
    surname: HTMLInputElement,
    name: HTMLInputElement,
}

interface ILoginProps {
    email: HTMLInputElement,
    password: HTMLInputElement,
}