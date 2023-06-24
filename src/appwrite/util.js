import { ID } from 'appwrite'
import { account, databases } from './appwriteConfig'



export const creatSession = (user) => {
    return account.createEmailSession(user.email, user.password)
        .then(response => {
            console.log(response)
            return response
        })
        .catch(error => {
            console.log(error)
            return error
        })
}

export const createUser = (user, navigate) => {
    return account.create(ID.unique(), user.email, user.password, user.name)
        .then(response => {
            console.log(response)
            return creatSession(user)
        })
        .then(response => {
            console.log(response.userId)
            let user = response.userId
            return databases.createDocument(process.env.REACT_APP_APPWRITE_DATABASE_ID, process.env.REACT_APP_APPWRITE_USER_COLLECTION_ID, user, {
                UserId: user,
                email: response.providerUid,
            })
        })
        .then(response => {
            console.log(response)
            return response
        })
        .catch(error => {
            console.log(error)
            return error
        });
}

 