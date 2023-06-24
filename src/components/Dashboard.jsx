import React, { useState } from 'react'
import camera_light from '../images/camera_light.png'
import arrowIcon from '../images/arrow.png'
import groupJoinIcon from '../images/group-join-icon.png'
import searchIcon from '../images/search-icon.png'
import { account, databases } from '../appwrite/appwriteConfig'
import { ID } from 'appwrite'

function Dashboard() {
  // for components 
  const [popVisible, setPopVisible] = useState(false)
  const [cardVisible, setCardVisible] = useState(true)
  const initialGroup = {
    profileFile: undefined,
    title: ""
  }
  const [group, setGroup] = useState(initialGroup)

  // handling group pop up 
  const handlePlusClick = () => {
    setPopVisible(true)
    setCardVisible(false)
  };

  // handling back click function
  const handleBackClick = (e) => {
    e.preventDefault()
    setPopVisible(false)
    setCardVisible(true)
    setGroup(initialGroup)
    clearText()
  };

  function clearText() {
    const inputEl = document.querySelector("#clear-text")
    inputEl.value = ""
  }

  // for Group file value
  const handleChange = (e) => {
    e.preventDefault()
    console.log(e.target.files);
    setGroup({
      ...group,
      profileFile: URL.createObjectURL(e.target.files[0])
    });
  }

  // card stack 
  const [cardComponents, setCardComponents] = useState([])

  function loadCards(GroupIDs) {
    // const container = document.getElementById('chatStack')
    GroupIDs.forEach(async (GID) => {

      console.log(GID)
      let GroupDetails = await databases.getDocument(
        process.env.REACT_APP_APPWRITE_DATABASE_ID,
        process.env.REACT_APP_APPWRITE_GROUPS_COLLECTION_ID, GID)

      // let group = {
      //   profileFile: GroupDetails.profileFile == undefined ? undefined : GroupDetails.profileFile,
      //   title: GroupDetails.GroupTitle,
      // }
      // const cardName = `Child ${cardComponents.length + 1}`
      const newChildCard = <GroupCard key={`Child ${cardComponents.length + 1}`} group={
        {
          profileFile: GroupDetails.profileFile === undefined ? undefined : GroupDetails.profileFile,
          title: GroupDetails.GroupTitle,
        }
      } notification="welcome!" />;
      setCardComponents([newChildCard, ...cardComponents]);

    });
  }
  // databases.getDocument(process.env.REACT_APP_APPWRITE_DATABASE_ID, process.env.REACT_APP_APPWRITE_USER_COLLECTION_ID, "6491e98a1e401efa89a4").then(res => loadCards(res.JoinedGroupIDs))


  // Creates Group
  const creatGroup = async (e) => {
    e.preventDefault()
    console.log(group)
    // TODO:
    //  process to join in the group with id or qr, 
    // object of array of photos when working with face api,
    // then create group card
    // access group card with the click and navigate to chat

    let admin = "", groupId = ""
    // getting user from auth
    const activeUser = account.get()
    await activeUser
      .then(response => {
        console.log(response)
        admin = response.$id
        // creating doc for group in database
        return databases.createDocument(
          process.env.REACT_APP_APPWRITE_DATABASE_ID,
          process.env.REACT_APP_APPWRITE_GROUPS_COLLECTION_ID, ID.unique(), {
          GroupTitle: group.title,
          Admin: admin,
          // TODO - GroupDp: group.profileFile, ---> need to create a valid url for uploaded picture 
          GroupMemberIDs: [admin],
        });
      })
      .then(response => {
        console.log(response)
        groupId = response.$id
        // Getting the user doc from database
        return databases.getDocument(
          process.env.REACT_APP_APPWRITE_DATABASE_ID,
          process.env.REACT_APP_APPWRITE_USER_COLLECTION_ID, admin)
      })
      .then(response => {
        console.log(response)
        response.JoinedGroupIDs.push(groupId)
        let groups = response.JoinedGroupIDs
        // Updating the user doc in the database to add the group
        return databases.updateDocument(
          process.env.REACT_APP_APPWRITE_DATABASE_ID,
          process.env.REACT_APP_APPWRITE_USER_COLLECTION_ID, admin, {
          JoinedGroupIDs: groups
        })
      })
      .then(response => {
        console.log(response)
        loadCards(response.JoinedGroupIDs)




        // worked--->
        // const container = document.getElementById('chatStack')
        // const chatStack = ReactDOM.createRoot(container);
        // chatStack.render(<GroupCard group={group} notification="welcome!" time={response.$createdAt.slice(11,16)}/>);
      })
      .catch(error => console.log(error))

    // TODO - after promise successful need to cut the creation window and create the groupCard element and might open the chat screen for larger screens. 

    console.log("group created")
    handleBackClick(e)


  }


  return (
    <div id='screen' className=' w-full h-screen bg-gray-700'>

      <nav className='flex justify-between border-b border-b-gray-600'>
        <div>
          <img className='mx-3 mt-6 w-44 h-auto relative -top-2' src={require('../images/logo_white.png')} alt="logo" />
        </div>
        <div className='flex items-center mx-2'>
          <button id='createGroupBtn' onClick={handlePlusClick} className='items-center text-4xl leading-none text-white mx-1 w-9 h-9 bg-gray-500 rounded-full hover:bg-gray-600'>+</button>
          <img className='w-9 h-9 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2qYGz5830vmlcv3GkXFoZsIvRucQcaCD6zfE3UZE0w&usqp=CAU&ec=48665699" alt="" />
        </div>
      </nav>


      <div id='createGroupComponent' style={{ visibility: popVisible ? 'visible' : 'hidden' }} className='w-full flex justify-center'>
        <div className='w-11/12 h-2/5 sm:w-2/3  lg:w-1/2 my-28 py-11 absolute bg-gray-600 rounded-md'>
          <form className='my-6 mx-5 flex flex-col'>

            <div className='flex flex-row'>
              <div >
                <img className='w-16 h-16 xl:w-20 object-cover rounded-md ' src={group.profileFile === undefined ? camera_light : group.profileFile} alt="" />
                <input type="file" onChange={handleChange} className='block w-14 h-16 xl:w-16 absolute top-16 z-0 opacity-0 cursor-pointer' />
              </div>

              <input id='clear-text' type="text" onChange={(e) => {
                setGroup({
                  ...group,
                  title: e.target.value
                })
              }} placeholder='Enter group title' className='px-2 ml-2 rounded-md w-full placeholder:text-gray-400 bg-gray-100' />
            </div>

            <div className='flex mt-5'>
              <button className='w-1/2 h-10 rounded-md m-1 flex justify-center items-center bg-gray-400' onClick={handleBackClick}>
                <img className='w-6 h-5 rotate-180' src={arrowIcon} alt="submit" />
              </button>

              <button className='w-1/2 h-10 rounded-md m-1 flex justify-center items-center bg-[#1cb0a9]' onClick={creatGroup}>
                <img className='w-6 h-5' src={arrowIcon} alt='close' />
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* <div style={{ visibility: cardVisible ? 'visible' : 'hidden' }} className='w-full h-full sm:w-2/3 md:w-1/2 bg-black flex flex-col p-5'></div> */}
      <div style={{ visibility: cardVisible ? 'visible' : 'hidden' }} className='w-full h-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4'>

        <div className='bg-gray-700 text-gray-300'>

          <div className='w-full h-14 flex justify-center items-center relative'>
            <input className='w-4/5 h-9 mx-2 pl-2 bg-gray-500 rounded-lg focus:outline-none focus:border focus:border-gray-400' type="text" placeholder='Search...' />
            <img className='w-6 h-6 absolute right-20 sm:right-16' src={searchIcon} alt="search" />
            <img className='w-9 h-9 bg-gray-500 p-1 mr-2 rounded-lg cursor-pointer hover:bg-gray-600' src={groupJoinIcon} alt='joinGroup' onClick={() => { console.log("click") }} />
          </div>

          <div id='chatStack'>
            {cardComponents}
          </div>
        </div>

        <div className='bg-gray-600 text-gray-200 hidden sm:block sm:col-span-2 lg:col-span-3 '> will connect this part with the chat component created in another file
        </div>

      </div>
    </div>
  )
}

const GroupCard = (props) => {
  return (
    <>
      <div className='w-full h-20 h- mobil sm:h-16 bg-gray-700 border-b border-gray-600 flex items-center relative '>
        <div className='mx-3'>
          <img className='rounded-full' src={props.group.profileFile === undefined ? camera_light : props.group.profileFile} alt="groupDp" />
        </div>
        <div>
          <h2 className='font-semibold text-gray-200 cursor-pointer'>{props.group.title === "" ? "who's birthday🥳" : props.group.title}</h2>
          <p className='text-xs text-gray-300 opacity-60'>{props.notification}</p>
        </div>
        <p className='text-xs text-gray-400 opacity-80 absolute bottom-3 right-2 font-sans'>{props.time}</p>
      </div>
    </>
  )
}

export default Dashboard