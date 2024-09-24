import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
} = process.env;

const client = new sdk.Client();

client.setEndpoint("https://cloud.appwrite.io/v1"!).setProject("66e1bd2d000df604dbd2"!).setKey("standard_63b8796670489c2474fcf67df0de2df1df0f08499e3a028a8399a73ddc2bd61d7ba7b94f0d47f6aaa2ce5045b33e5a3a3f1579fbb3c8c46e7603b83fb3918dd1b5bef66d52d3cd6512a4f5000d60f37c95597870719b5ceccbb3e65a0444e9cd9e0c5079bac8e035563cb483132587a034721aa42d9370ed0720f68bee7158ca"!);

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);


