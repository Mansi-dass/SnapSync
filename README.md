# SnapSync!
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Set up SnapSync:
1. First thing first, make a fork of this repository. By clicking the "fork" symbol.
2. Clone the forked repository:

#### HTTPS
```
$ git clone https://github.com/Mansi-dass/SnapSync.git
```
#### GitHub CLI
```
$ gh repo clone Mansi-dass/SnapSync
```
#### SSH 
```
$ git clone git@github.com:Mansi-dass/SnapSync.git
```

## Config / Secrets environment variables
Copy **.env.sample** to **.env** and add your private information\
*Note*: never commit this file, it is ignored by Git

Create an account on [Appwrite](https://cloud.appwrite.io/), to create your secrets:
```
REACT_APP_APPWRITE_API_ENDPOINT="<your-appwrite-api-endpoint>"
REACT_APP_APPWRITE_PROJECT_ID="<your-appwrite-project-id>"
REACT_APP_APPWRITE_DATABASE_ID="<your-appwrite-database-id>"
REACT_APP_APPWRITE_USER_COLLECTION_ID="<your-appwrite-user-collection-id>"
REACT_APP_APPWRITE_GROUPS_COLLECTION_ID="<your-appwrite-group-collection-id>"
```

## Running the project
Note: Make sure your system has **node.js** installed. Then, run:
```
$ npm ci

$ npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## License
The SnapSync is licensed under the [MIT](https://github.com/Mansi-dass/SnapSync/blob/main/LICENSE) license.
