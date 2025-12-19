import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppSidebar from '../components/layout/AppSidebar';
import PageHeader from '../components/layout/PageHeader';
import TaskCard from '../components/task/TaskCard';
import ConfirmationModal from '../components/ui/ConfirmationModal';

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

const TaskPage: React.FC = () => {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('user');
    setShowLogoutModal(false);
    navigate('/');
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  const handleAddTask = () => {
    const newTask: Task = {
      id: Date.now(),
      title: 'Title',
      description: 'Description',
      dueDate: 'Due date'
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#1a1612] flex">
      <AppSidebar />

      <div className="flex-1 flex flex-col">
        <PageHeader pageTitle="Tasks" onLogout={handleLogout} />

        <main className="flex-1 p-12 overflow-auto">
          {/* Tasks Header */}
          <div className="flex items-center gap-3 mb-6">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#ff7a2d">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
            </svg>
            <h2 className="text-white text-3xl font-bold">Tasks</h2>
          </div>
          
          {/* Task Cards */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="bg-[#ff7a2d] rounded-2xl p-8 text-center">
              <h3 className="text-white text-xl font-semibold mb-4">Tasks</h3>
              <p className="text-[#4a5568] text-7xl font-bold mb-4">99</p>
              <button className="text-[#ff7a2d] bg-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-100">See all</button>
            </div>
            
            <div className="bg-[#e6d5c0] rounded-2xl p-8 text-center">
              <h3 className="text-[#ff7a2d] text-xl font-semibold mb-4">To do</h3>
              <p className="text-[#4a5568] text-7xl font-bold mb-4">99</p>
              <button className="text-[#ff7a2d] font-semibold hover:underline">See all</button>
            </div>
            
            <div className="bg-[#e6d5c0] rounded-2xl p-8 text-center">
              <h3 className="text-[#ff7a2d] text-xl font-semibold mb-4">Done</h3>
              <p className="text-[#4a5568] text-7xl font-bold mb-4">99</p>
              <button className="text-[#ff7a2d] font-semibold hover:underline">See all</button>
            </div>
          </div>

          {/* Task List Section */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-white text-2xl font-bold">Task List</h3>
              <button 
                onClick={handleAddTask}
                className="flex items-center gap-2 text-[#ff7a2d] hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 bg-transparent border-2 border-[#ff7a2d] rounded-full flex items-center justify-center">
                  <span className="text-[#ff7a2d] text-xl font-bold leading-none">+</span>
                </div>
                <span className="font-semibold">Add Task</span>
              </button>
            </div>
            
            {tasks.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16">
                <p className="text-gray-300 text-lg mb-4 text-center max-w-2xl">
                  Nothing to do here, go sleep or do something else you lazy piece of shi
                </p>
                <div className="text-6xl mb-8">👌</div>
              </div>
            ) : (
              <div className="space-y-4">
                {tasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    dueDate={task.dueDate}
                    onDelete={handleDeleteTask}
                  />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>

      <ConfirmationModal
        isOpen={showLogoutModal}
        onClose={cancelLogout}
        onConfirm={confirmLogout}
        title="Logout Confirmation"
        message="Are you sure you want to logout? You will be redirected to the landing page."
        confirmText="Logout"
        cancelText="Cancel"
      />
    </div>
  );
};

export default TaskPage;
