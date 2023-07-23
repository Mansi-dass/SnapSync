import React, { useState } from 'react'

function Chat() {
    let [GroupSideBar, setGroupSideBar] = useState(false)
    let Gname = ""

    const sendMssg = (e) => {
        e.preventDefault()
        const sentMssg = document.getElementById('message').value
        sentMssg ? console.log(sentMssg) : console.log("nothing in the mssg")
    }

    return (
        <div className='w-full h-full border-l border-l-gray-600 relative overflow-hidden'>
            <nav className='w-full h-[3.2rem] flex justify-between items-center bg-gray-700 '>
                <div className='flex m-5 justify-center items-center'>
                    <img className='w-9 h-9 rounded-full cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2qYGz5830vmlcv3GkXFoZsIvRucQcaCD6zfE3UZE0w&usqp=CAU&ec=48665699" alt="" onClick={(e) => {
                        e.preventDefault()
                        setGroupSideBar(true)
                    }} />
                    <div className=''>
                        <h1 className='ml-2 font-semibold text-gray-200 leading-none cursor-pointer' onClick={(e) => {
                            e.preventDefault()
                            setGroupSideBar(true)
                        }}>
                            {Gname ? Gname : "GroupName"}
                        </h1>
                        <p className='ml-2 text-xs text-gray-400 '>Status</p>
                    </div>
                </div>

                <div className='flex '>
                    <svg className='mx-3 cursor-pointer' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" fill='#d1d5db'></path>
                    </svg>

                    <div id='optionIcon' className='mr-4 cursor-pointer'>
                        <div className='w-1 h-1 m-[3px] rounded-full bg-gray-300'></div>
                        <div className='w-1 h-1 m-[3px] rounded-full bg-gray-300'></div>
                        <div className='w-1 h-1 m-[3px] rounded-full bg-gray-300'></div>
                    </div>
                </div>
            </nav>

            {GroupSideBar ?
                <div className='animate-slideIn w-[28%] h-[calc(100%-3.2rem)] bg-gray-700 absolute -right-[28%] border border-gray-600'>
                    <img className='w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 p-1 md:m-1 cursor-pointer absolute' src={require('../images/back-icon.png')} alt="<-" onClick={(e) => {
                        e.preventDefault()
                        setGroupSideBar(false)
                    }} />
                    <div className='w-full pt-2 mt-2 lg:mt-4 flex flex-col items-center'>
                        <div className='w-20 h-20 lg:w-36 lg:h-36 bg-gray-400 rounded-full'>
                            <img className='rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2qYGz5830vmlcv3GkXFoZsIvRucQcaCD6zfE3UZE0w&usqp=CAU&ec=48665699" alt="" />
                        </div>
                        <div className='flex p-2 items-center  border-b border-gray-600'>
                            <h1 className='p-1 lg:text-xl font-semibold text-gray-300'>{Gname ? Gname : "GroupName"}</h1>
                            <img className='mx-1 w-5 h-5 cursor-pointer' src={require('../images/edit-icon.png')} alt="" />
                        </div>
                    </div>
                    <div className='w-full h-full'>
                        <div className='flex justify-center'>
                            <span className='w-1/2 py-3 text-gray-200 text-center border-r border-gray-600 opacity-80 font-normal text-sm hover:opacity-100 hover:bg-gray-600 cursor-pointer'>Members</span>
                            <span className='w-1/2 py-3 text-gray-200 text-center border-r border-gray-600 opacity-80 font-normal text-sm hover:opacity-100 hover:bg-gray-600 cursor-pointer'>Media</span>
                        </div>
                        <div className='h-1/2 overflow-y-scroll '>
                        </div>
                    </div>

                </div>
                :
                <div className='animate-slideOut w-[28%] h-[calc(100%-3.2rem)] bg-gray-700 absolute -right-[28%] border border-gray-600'>
                    <img className='w-9 h-9 p-1 m-1 cursor-pointer rotate-180' src={require('../images/back-icon.png')} alt="->" />
                </div>
            }

            <section className='h-[calc(100%-3.2rem)]'>
                {/* message body */}
            </section>

            <div className={`${GroupSideBar ? 'w-[calc(100%-28%)]' : 'w-full'} transition-width duration-[600ms] ease-linear relative -top-12 bg-gray-700 border-l-2 border-r-4 border-gray-600 rounded-xl flex items-center px-1 py-[6px]`}>

                <div id='attachPhotoIcon' className='group mx-1 cursor-pointer'>
                    <div className='p-1 relative'>
                        <div className='w-[18px] h-[18px] border-2 border-gray-300 group-hover:border-teal-400 rounded-md'></div>
                        <div className='w-4 h-4 p-[8px] absolute -top-[1px] left-[13px] bg-gray-700 rounded-sm flex justify-center items-center'>
                            <div>
                                <div className='w-[2px] h-[10px] relative left-[4px] bg-gray-300 group-hover:bg-teal-400'></div>
                                <div className='w-[10px] h-[2px] relative bottom-[6px] bg-gray-300 group-hover:bg-teal-400'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <input id='message' className='w-[calc(100%-60px)] py-1 px-2 mr-2 bg-gray-700 focus:outline-0' type="text" placeholder='Message...' />
                <img className='bg-gray-400 p-1 pl-2 cursor-pointer rounded-2xl hover:bg-gray-500' src={require('../images/sent-icon.png')} alt="Send" onClick={sendMssg} />

            </div>
        </div>
    )
}

export default Chat