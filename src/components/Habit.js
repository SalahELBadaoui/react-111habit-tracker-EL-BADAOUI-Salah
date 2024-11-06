// src/components/Habit.js
import React from 'react';

const Habit = ({ habit, toggleHabit, deleteHabit }) => {
  return (
    <div className="habit">
      <span style={{ textDecoration: habit.completed ? 'line-through' : 'none' }}>
        {habit.name}
      </span>
      <button onClick={() => toggleHabit(habit.id)}>
        {habit.completed ? 'Non fait' : 'Fait'}
      </button>
      <button onClick={() => deleteHabit(habit.id)} style={{ marginLeft: '10px', color: 'red' }}>
        Supprimer
      </button>
    </div>
  );
};

export default Habit;
