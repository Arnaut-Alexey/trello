import { Client, Account } from "appwrite";

export const client = new Client();
export const account = new Account(client);

export const APIEndpoint = 'https://cloud.appwrite.io/v1';
export const projectID = '653565b2629996def6c9';

client
    .setEndpoint(APIEndpoint)
    .setProject(projectID);