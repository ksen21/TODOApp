







import React, { useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { RxCross2 } from 'react-icons/rx'
import { AiOutlineEdit } from 'react-icons/ai'



const Todo_practice = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [deleteConfirmation, setDeleteConfirmation] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState('');
    const [editmode, setEditMode] = useState(false)
    const [editBox, setEditBox] = useState(false)
    const [newTaskUpdate, setNewTaskupdate] = useState('');
    const [newDescriptionUpdate, setNewDescriptionUpdate] = useState('');


    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            const allInputData = { id:new Date().getTime().toString(),title: newTask, description: newDescription }

            setTasks([...tasks, allInputData]);
            setNewTask('');
            setNewDescription('');
            // const title = newTask
            // console.log(tasks);
        }
    };
    const handleUpdateTask = (index) => {
        if (newTask.trim() !== '') {
          
            setTasks([{ title: newTask, description: newDescription }])
            // setTasks[tasks[index] = {title: newTask, description: newDescription}]
            setNewTask('');
            setNewDescription('');
            setEditBox(false)
        }
    };

    const handleDeleteTask = (task) => {
        setTaskToDelete(task);
        setDeleteConfirmation(true);
    };

    const confirmDelete = () => {
        setTasks(tasks.filter((task) => task !== taskToDelete));
        setDeleteConfirmation(false);
    };

    const handleEditTask = (id) => {
        // setTaskToDelete(task);

        let newItem = tasks.find((elem)=>{
            return elem.id===id
        })
        console.log(newItem);
        setEditBox(true);

    };

    return (
        <main className='main_screen bg-black h-screen flex justify-center items-center  '>
            <div className='bg-zinc-900 h-[35rem] w-[20rem]'>

                <div className='flex flex-row m-6 gap-2' >
                    <div className='flex flex-col gap-1'>
                        <input id="task"
                            type="text"
                            placeholder='Task...'
                            className='w-48 bg-zinc-900 border-solid border-amber-700 border-r-2 border-t-[1px] border-l-[0.2px] border-b-2 outline-none placeholder:p-1 text-white'
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)} />

                        <input type="text"
                            placeholder='About...'
                            className='w-48 bg-zinc-900 border-solid border-amber-700 border-r-2 border-b-2 outline-none  border-t-[1px] border-l-[0.2px] placeholder:p-1 text-white'
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)} />

                    </div>

                    <button className='w-16  text-amber-700 bg-slate-800 border-solid border-amber-800 border-2 rounded-md flex justify-center items-center' onClick={handleAddTask}><BiPlus size={40} className='text-center' /></button>
                </div>

                {deleteConfirmation && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
                        <div className="bg-zinc-900 h-[10rem] w-[15rem] p-4 rounded shadow flex flex-col justify-center items-center border-t-4 border-amber-700">
                            <p className="mb-4 text-white text-center">delete this task?</p>
                            <div className="flex justify-center">
                                <button
                                    className=" w-24 h-12 text-white py-2 px-4 rounded mr-2 border-solid  border-amber-700 border-r-2 border-t-[1px] border-l-[0.2px] border-b-2"
                                    onClick={confirmDelete}
                                >
                                    Yes
                                </button>
                                <button
                                    className=" w-24 h-12 text-white py-2 px-4 rounded mr-2 border-solid  border-amber-700 border-r-2 border-t-[1px] border-l-[0.2px] border-b-2"
                                    onClick={() => setDeleteConfirmation(false)}
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                )}


                {editBox && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
                        <div className="bg-zinc-900 h-[23rem] w-[20rem] p-4 rounded shadow flex flex-col gap-2">
                 
                            <input id="task"
                                type="text"
                                placeholder='Mini input'
                                className='w-72 bg-zinc-900 border-solid border-amber-700 border-r-2 border-t-[1px] border-l-[0.2px] border-b-2 outline-none placeholder:p-1 text-white'
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)} />

                            <textarea id="task"
                                type="text"
                                placeholder='Max input.'
                                className='w-72 bg-zinc-900 border-solid border-amber-700 border-r-2 border-t-[1px] border-l-[0.2px] border-b-2 outline-none placeholder:p-1 text-white'
                                value={newDescription}
                                rows="10" cols="50"
                                onChange={(e) => setNewDescription(e.target.value)} />
                            <div className='flex flex-row gap-2 justify-center mt-3'>
                            <button className=' w-16 bg-zinc-900 border-solid  border-amber-700 border-r-2 border-t-[1px] border-l-[0.2px] border-b-2 outline-none text-white' onClick={() => setEditBox(false)}> Cancel</button>

                                <button className='w-16 bg-zinc-900 border-solid border-amber-700 border-r-2 border-t-[1px] border-l-[0.2px] border-b-2 outline-none text-white' onClick={() => handleUpdateTask()}> Save</button>
                              
                            </div>

                        </div>
                    </div>
                )}

                <ul className="mt-4 mr-8 ml-6 flex flex-col gap-3">
                    {
                        tasks.map((task) => (
                            <>
                                <li
                                    key={task.id}
                                    className="border-2 border-amber-700 py-2 px-2 flex items-center rounded-md cursor-pointer "
                                    onClick={() => setEditMode(editmode ? false : true)}
                                >
                                    <div>
                                        <h3 className="font-bold text-white ">{task.title}</h3>
                                        <p className='text-white text-xs'>{task.description}</p>
                                    </div>

                                    <button
                                        className="ml-auto w-7 h-7 items-center text-amber-700 bg-slate-800 border-solid border-amber-700 border-2 rounded-md flex justify-center"
                                        onClick={() => handleDeleteTask(task)}
                                    >
                                        <RxCross2 size={15} className='text-center' />
                                    </button>

                                </li>
                                {(editmode ? <button
                                    className=' ml-[228px] mt-[-8px]  w-7 h-7 items-center text-white bg-slate-800 border-solid border-amber-700 border-2 rounded-md flex justify-center ' onClick={() => handleEditTask(task.id)}><AiOutlineEdit /></button> : '')}

                            </>

                        ))
                    }


                </ul>


            </div>

        </main>
    )
}

export default Todo_practice