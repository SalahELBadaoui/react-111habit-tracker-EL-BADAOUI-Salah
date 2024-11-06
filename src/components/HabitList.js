// src/components/HabitList.js
import React from 'react';
import Habit from './Habit';

const HabitList = ({ habits, toggleHabit, deleteHabit }) => {
  return (
    <div>
      {habits.map((habit, index) => (
        <Habit key={index} habit={habit} toggleHabit={toggleHabit} deleteHabit={deleteHabit} />
      ))}
    </div>
  );
};

export default HabitList;
