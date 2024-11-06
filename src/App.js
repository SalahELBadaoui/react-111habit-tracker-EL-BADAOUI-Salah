// src/App.js
import React, { useState, useEffect } from 'react';
import HabitList from './components/HabitList';
import HabitForm from './components/HabitForm';
import './App.css';

const App = () => {
  // Charger les habitudes depuis localStorage (ou utiliser une liste vide par défaut)
  const [habits, setHabits] = useState(() => {
    const savedHabits = localStorage.getItem('habits');
    return savedHabits ? JSON.parse(savedHabits) : [];
  });

  // Sauvegarder les habitudes dans localStorage à chaque mise à jour de la liste
  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  // Ajouter une habitude
  const addHabit = (name) => {
    const newHabit = { id: Date.now(), name, completed: false };
    setHabits([...habits, newHabit]);
  };

  // Marquer une habitude comme accomplie/non accomplie
  const toggleHabit = (id) => {
    setHabits(
      habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  // Supprimer une habitude
  const deleteHabit = (id) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  // Calculer le nombre total et le nombre accompli d’habitudes
  const totalHabits = habits.length;
  const completedHabits = habits.filter(habit => habit.completed).length;

  return (
    <div className="app">
      <h1>Suivi d'habitudes</h1>
      <HabitForm addHabit={addHabit} />
      
      {/* Affichage du compteur */}
      <div className="counter">
        <p>Total d'habitudes : {totalHabits}</p>
        <p>Habitudes accomplies : {completedHabits}</p>
      </div>

      <HabitList habits={habits} toggleHabit={toggleHabit} deleteHabit={deleteHabit} />
    </div>
  );
};

export default App;
