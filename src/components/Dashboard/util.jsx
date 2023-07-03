import React from 'react'
import * as db from '../../appwrite/util'
import { GroupCard } from './Dashboard'

export const created = (group, admin) => {
  let groupId = ""
  // , GroupIDs = []
  return db.createGroupDoc(group, admin)
    .then(response => {
      console.log(response)
      groupId = response.$id
      return db.getUserDoc(admin)
    })
    .then(response => {
      console.log(response)
      response.JoinedGroupIDs.push(groupId)
      let groups = response.JoinedGroupIDs
      return db.updateUserGroupList(admin, groups)
    })
    .then(response => {
      console.log(response)
      // GroupIDs = response.JoinedGroupIDs
    })
    .catch(error => console.log(error))
  // TODO - after promise successful need to create the groupCard element and might open the chat screen for larger screens. 
}

function loadCard(GroupDetails) {
  const newChildCard = <GroupCard key={GroupDetails.$id} group={
    {
      profileFile: GroupDetails.profileFile === undefined ? undefined : GroupDetails.profileFile,
      title: GroupDetails.GroupTitle,
    }
  } notification="welcome!" />
  return newChildCard
}

export async function loadDashboard(cardComponents, setCardComponents, userId, mode) {
  let cardComponentsArray = []
  try {
    const userDetails = await db.getUserDoc(userId)
    console.log(userDetails)
    const groupIds = userDetails.JoinedGroupIDs
    const len = groupIds.length
    let isMssgInCardComp = false
    
    if (mode === "signUp" || (mode === "signIn" && len === 0)) {
      let message = <p className='text-sm flex justify-center p-2 text-gray-400'>ⓘ Create Groups or Join existing one's</p>
      // setCardComponents([message])
      cardComponentsArray.push(message)
      isMssgInCardComp = true
    }
    else if (mode === "signIn" && len === 1 && isMssgInCardComp === true) {
      try {
        let GroupDetails = await db.getGroupDoc(groupIds[0])
        cardComponentsArray.pop()
        cardComponentsArray.push(loadCard(GroupDetails))
        // setCardComponents([loadCard(GroupDetails)])
      } catch (error) { console.log(error) }
      isMssgInCardComp = false
    }
    else if (mode === "signIn" && len && isMssgInCardComp === false) {
      for (let index = 0; index < len; index++) {
        try {
          let GroupDetails = await db.getGroupDoc(groupIds[index])
          cardComponentsArray.unshift(loadCard(GroupDetails))
          // setCardComponents([loadCard(GroupDetails), ...cardComponents])
        } catch (error) { console.log(error) }
      }
    }
    else {
      console.error("something went wrong while loading Dashboard")
    }
  } catch (error) { console.log(error) }
  setCardComponents(cardComponentsArray)
}



