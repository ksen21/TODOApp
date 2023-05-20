




import React, { useState } from 'react';

const Chatgpt = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { title: newTask, description: newDescription }]);
      setNewTask('');
      setNewDescription('');
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

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="task">Title:</label>
        <input
          id="task"
          className="w-full px-2 py-1 border rounded"
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-bold" htmlFor="description">Description:</label>
        <textarea
          id="description"
          className="w-full px-2 py-1 border rounded"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        ></textarea>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
        onClick={handleAddTask}
      >
        Add Task
      </button>

      {deleteConfirmation && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-4 rounded shadow">
            <p className="mb-4">Are you sure you want to delete this task?</p>
            <div className="flex justify-end">
              <button
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mr-2"
                onClick={confirmDelete}
              >
                Yes
              </button>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded"
                onClick={() => setDeleteConfirmation(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      <ul className="mt-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="border-b py-2 flex items-start"
          >
            <div>
              <h3 className="font-bold">{task.title}</h3>
              <p>{task.description}</p>
            </div>
            <button
              className="ml-auto text-red-600 hover:text-red-800"
              onClick={() => handleDeleteTask(task)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Chatgpt;
