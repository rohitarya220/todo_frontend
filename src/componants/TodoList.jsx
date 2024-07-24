import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import CreateTodoModal from './CreateTodoModal';
import { useStateContext } from '../context/ContextProvider';

const TodoList = () => {
  const { handleLogOut, getTodos, todoList } = useStateContext();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const logOut = () => {
    handleLogOut();
  };

  return (
    <div className="max-w-screen-xl mx-auto py-6 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Todo List</h1>
      <button onClick={logOut}> log out</button>
      <div className="flex justify-center mb-8">
        <Button
          type="primary"
          icon={<FaPlus />}
          onClick={showModal}
          className="flex items-center px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none transition"
        >
          Create Todo
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {todoList.map((todo, index) => (
          <div
            key={index} // Key prop should be on the outer element of the map return
            className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{todo.title}</h2>
              <p className="text-gray-600">{todo.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <button className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none transition">
                  Complete
                </button>
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-700 transition">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700 transition">
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CreateTodoModal isModalVisible={isModalVisible} handleCancel={handleCancel} />
    </div>
  );
};

export default TodoList;
