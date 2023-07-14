import React from 'react'

function Chat() {
    let Gname = ""
    return (
        <div className='w-full h-full border-l border-l-gray-600'>
            <nav className='w-full h-[3.2rem] flex justify-between items-center bg-gray-700 '>
                <div className='flex m-5 justify-center items-center'>
                    <img className='w-9 h-9 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2qYGz5830vmlcv3GkXFoZsIvRucQcaCD6zfE3UZE0w&usqp=CAU&ec=48665699" alt="" />
                    <div className=''>
                        <h1 className='ml-2 font-semibold text-gray-200 leading-none'>{Gname ? Gname : "GroupName"}</h1>
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

            <section className='h-[calc(100%-3.2rem)]'>
                {/* message body */}
            </section>

            <div className='relative -top-12 bg-gray-700 border-l-2 border-r-4 border-gray-600 rounded-xl flex items-center px-1 py-[6px]'>

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

                <input className='w-[calc(100%-60px)] py-1 px-2 mr-2 bg-gray-700 focus:outline-0' type="text" placeholder='Message...'/>

                <img className='bg-gray-400 p-1 pl-2 cursor-pointer rounded-2xl hover:bg-gray-500' src={require('../images/sent-icon.png')} alt="Send" />

            </div>
        </div>
    )
}

export default Chat