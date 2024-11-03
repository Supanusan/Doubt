import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { SetCover_photoes, SetDiscription, SetName, SetPrice } from './Redux/ReduxSlice'

const Task = () => {


    const [Name, setName] = useState('')
    const [Description, setDescription] = useState('')
    const [Price, setPrice] = useState('')
    const [Photoes, setPhotoes] = useState([])
    const dispatch = useDispatch()


    const SentAllData = () => {
        if (Name) {
            dispatch(SetName(Name))
        }
        if (Description) {
            dispatch(SetDiscription(Description))
        }
        if (Price) {
            dispatch(SetPrice(Price))
        }
        if (Photoes) {
            dispatch(SetCover_photoes(Photoes))
        }

    }

    const HandelPhotoes = (e) => {
        setPhotoes((photoes) => [...photoes, e.target.file])
    }


    return (
        <div className=' h-screen w-fullpy-5 px-6 text-center flex flex-col items-center'>
            <h1 className='p-4 font-extrabold text-3xl'>
                Add your Product details
            </h1>
            <div className='w-full  flex flex-col items-center'>
                <input type="text" className='bg-gray-100 rounded-md text-gray-600 p-2 w-3/4 mb-5 px-5' placeholder='Name' onChange={(e) => setName(e.target.value)} value={Name} />
                <input type="text" className='bg-gray-100 rounded-md text-gray-600 p-2 w-3/4 mb-5 px-5 h-[130px]' placeholder='Description' onChange={(e) => setDescription(e.target.value)} value={Description} />

                <div className='flex  mt-10 mb-10 w-[50%] '>
                    <div className='flex flex-col w-1/4 font-semibold'>
                        <h1>Cover</h1>
                        <h1>photoes</h1>
                    </div>
                    <div className='flex justify-start w-3/4 text-gray-600'>
                        <h1>(Upload up tp 5 photoes)</h1>
                    </div>

                </div>
                <div className='flex w-full justify-center'>
                    <input type="file" onChange={HandelPhotoes} />
                    <input type="file" onChange={HandelPhotoes} />
                    <input type="file" onChange={HandelPhotoes} />

                </div>
                <h1 className='my-3 py-8'>
                    Price
                </h1>
                <input type="text" className='bg-gray-100 rounded-md text-gray-600 p-2 w-3/4 mb-5 px-5' onChange={(e) => setPrice(e.target.value)} value={Price} placeholder='$0.00' />

            </div>
            <button onClick={SentAllData} className='bg-sky-600 text-white text-center w-[50%] p-3 rounded-md absolute bottom-7' >Next</button>
        </div>

    )
}

export default Task