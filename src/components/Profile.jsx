import React from 'react'
import { account } from '../appwrite/appwriteConfig'

function Profile() {
  const getData = account.get();

  getData.then(function (response) {
    console.log(response); 
  }, function (error) {
    console.log(error); 
  });

  return (
    <div>profile</div>
  )
}

export default Profile