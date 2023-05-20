


import React, { useState } from 'react'
import TodoList from './TodoList';
import './MainTodo.css';



export default function Main() {

    const [inputList, setInputList] = useState("");
    const [items, SetItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const addToList = () => {
        SetItems((oldItmes) => {
            return [...oldItmes, inputList]
        });
        setInputList("");
    };

    const deleteItems = (id) => {

        SetItems((oldItmes) => {
            return oldItmes.filter((arrElement, index) => {
                return index !== id;

            })
        });


    }

    return (
        <>
            <div className="main_div flex h-screen w-screen justify-center items-center">
                <div className="centerDiv bg-slate-300 sm:w-[15rem] md:w-[18rem] lg:w-[24rem] h-[28rem] rounded-3xl shadow-md shadow-black mix-blend-overlay   ">
                    <h1 className='text-center text-white p-2 font-bold text-4xl font-serif mt-5 bg-violet-700'>toDo - List</h1>
                    <hr className="my-4 h-px bg-gray-200  border-0 dark:bg-gray-700" />


                    <div className="input_side flex  ">
                        <input type="text" className=" text-gray-900  rounded-lg block sm:w-[8rem]  lg:w-[16rem]text-center text-2xl font-semibold outline-none  p-1 dark:placeholder-purple-600 dark:text-purple-600 bg-slate-300 ml-[6rem]  decoration-purple-600 placeholder-opacity-40" placeholder="Add  items" onChange={itemEvent} value={inputList} />



                        <button className='button rounded-full w-10 h-10 ml-4 mt-2 border-none outline-none hover:bg-green-500' onClick={addToList}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-white outline-none ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>

                        </button>
                    </div>
                    <hr className="mt-1 ml-16 h-px sm:w-[4rem] md:w-[9rem] lg:w-[13rem] bg-gray-200 border-0 dark:bg-purple-600 " />

                    <ol className=' font-semibold text-2xl ml-10 mt-2'>

                        {items.map((itemVal, index) => {
                            return <TodoList text={itemVal} key={index} id={index} onSelect={deleteItems} />
                        })}
                    </ol>




                </div>
            </div>
        </>
    )
}
