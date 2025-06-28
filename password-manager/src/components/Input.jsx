import React from 'react'
import { MdAddToPhotos } from "react-icons/md";

function handleAdd() {

}

const Input = () => {
    return (
        <div className='mx-auto m-5 w-[80vw] h-[5vh] '>
            <form>
                <div className="flex gap-4">
                    <input
                        className="bg-white w-[33%] text-black rounded-xl p-3"
                        type="text"
                        placeholder="Website"
                        name="website"
                    />
                    <input
                        className="bg-white w-[33%] text-black rounded-xl p-3"
                        type="text"
                        placeholder="Username or Email"
                        name="username"
                    />
                    <input
                        className="bg-white w-[33%] text-black rounded-xl p-3"
                        type="password"
                        placeholder="Password"

                        name="password"
                    />
                </div>
                <button onClick={(e) => {
                    handleAdd(e)
                }
                } className='m-4 text-xl mx-auto bg-blue-600 text-white px-4 py-2 rounded-lg flex justify-center gap-2 items-center w-[10vw] transition-all ease-in hover:scale-110 cursor-pointer'><MdAddToPhotos />Add</button>
            </form>

        </div>
    )
}

export default Input
