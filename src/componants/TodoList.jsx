import React from 'react';

const TodoList = () => {
  // Sample todo items (you can replace this with your dynamic data)
  const todos = [
    { id: 1, text: 'Example Todo Item 1' },
    { id: 2, text: 'Example Todo Item 2' },
    { id: 3, text: 'Example Todo Item 3' },
    { id: 4, text: 'Example Todo Item 4' },
    { id: 5, text: 'Example Todo Item 5' },
    { id: 6, text: 'Example Todo Item 6' },
    { id: 7, text: 'Example Todo Item 7' },
    { id: 8, text: 'Example Todo Item 8' },
    { id: 9, text: 'Example Todo Item 9' },
    { id: 10, text: 'Example Todo Item 10' },
    // Add more todo items as needed
  ];

  return (
    <div className="max-w-screen-xl mx-auto py-6 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Todo List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {todos.map(todo => (
          <div key={todo.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
              <p className="text-lg">{todo.text}</p>
              <button className="mt-2 px-3 py-1 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 focus:outline-none">Complete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
