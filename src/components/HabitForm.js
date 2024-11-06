// src/components/HabitForm.js
import React, { useState } from 'react';

const HabitForm = ({ addHabit }) => {
  const [habitName, setHabitName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit(habitName);
    setHabitName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nouvelle habitude"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default HabitForm;
