"use server";
import { ID, Query } from "node-appwrite";
import { createAdminClient } from "../appwrite";
import { appwriteConfig } from "../appwrite/config";
import { parseStringify } from "../utils";

// must use server to avoid exposing secret key


// flow
// 1. user enters full name and email
// 2. check if user already exists
// 3. send OTP
// 4. this will send a secret key for creating a session
// 5. create new user document if user is new
// 6. return users accountId that will be used to complete login
// 7. verify OTP and authenticate to login

const getUserByEmail = async (email: string) => {
    const { databases } = await createAdminClient();
    
    const result = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.usersCollectionId,
        [Query.equal('email', [email])],
    );

    // return the first user found
    return result.total > 0 ? result.documents[0] : null;
}

const handleError = (error: unknown, message: string) => {
    console.log(error, message);
    throw error;
}

const sendEmailOTP = async ({ email }: { email: string }) => {
    const { account } = await createAdminClient();

    try {
        const session = await account.createEmailToken(ID.unique(), email);

        return session.userId;
        
    } catch (error) {
        handleError(error, 'Error sending email OTP');
        
    }
}

export const createAccount = async ( { fullName, email }: { fullName: string, email: string } ) => {
    const existingUser = await getUserByEmail(email);

    const accountId = await sendEmailOTP({ email });

    if(!accountId) throw new Error('Failed to send an OTP');
    if(!existingUser) {
        const { databases } = await createAdminClient();

        await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.usersCollectionId,
            ID.unique(),
            {
                fullName,
                email,
                avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541',
                accountId,
            },
        );
    }

    return parseStringify( { accountId });
};
