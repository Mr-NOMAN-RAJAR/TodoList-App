"use client";
import { useState } from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, sateInputValuse] = useState("");

  // Add items
  const addTodos = () => {
    if (inputValue.trim() === "") return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue, completed: false },
    ]);
    sateInputValuse("");
  };

  // Toggle completion
  const toggletodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete Todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-col min-h-23px bg-[url('/images/bg.jpg')] bg-cover bg-center h-screen">
      <header className="bg-transparent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-serif font-bold">Todo List By NOMAN</h1>
          <p className="font-serif mt-3 text-yellow-300">
            Organize Your Work with Our Next.js Todo List App
          </p>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-md mx-auto p-4 bg-blue-950 shadow-white rounded-lg shadow-lg">
          <div className="mb-4">
            <div className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => sateInputValuse(e.target.value)}
                className="flex-grow p-2 border border-green-800 rounded-lg text-black"
                placeholder="Add a New Task ..."
              />
              <button
                onClick={addTodos}
                className="ml-2 px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500"
              >
                Add Task
              </button>
            </div>
          </div>

          <ul className="space-y-2">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`flex item-center justify-between p-2 border border-t-amber-50 rounded-lg ${
                  todo.completed ? "bg-lime-500 line-through" : "bg-blue-400"
                }`}
              >
                <span>{todo.text}</span>

                <div>
                  <button
                    onClick={() => toggletodo(todo.id)}
                    className="px-2 py-1 text-sm bg-blue-600 rounded-lg hover:bg-blue-500"
                  >
                    {todo.completed ? "Undo" : "Complete"}
                  </button>

                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="px-2 py-1 ml-2 text-sm bg-cyan-900 rounded-lg hover:bg-cyan-700"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 min-h-23px text-white h-12 flex items-center justify-center space-x-4 border-solid border-white">
       <div >
      <p className="font-serif font-small ">Created by</p>
      <p className=" text-yellow-400 font-serif font-bold">Noman Rajar</p>
      </div>
      <p>© 2024 My Website</p>
      <div className="flex space-x-4">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/mr-noman-5351bb2b4/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B7xQETWNnRvalaY2N%2BtFeBQ%3D%3D/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400"
        >
          <FaLinkedin size={20} />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/Mr-NOMAN-RAJAR"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400"
        >
          <FaGithub size={20} />
        </a>
      </div>
     
    </footer>
  );
};

export default TodoList;

