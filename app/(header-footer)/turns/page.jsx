"use client";
import NewTurn from '@/app/components/NewTurn';
import React, { useState } from 'react'
export default function page() {
  const [newPatientButton, setNewPatientButton] = useState(false);

  const handleSeeForm = () => {
    setNewPatientButton(!newPatientButton);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-white font-bold text-center ">Turnos</h1>
        <div className="flex gap-5">
          <button
            onClick={handleSeeForm}
            className="px-4 py-1 my-2 rounded-lg bg-white"
          >
            Ver Turnos
          </button>
          <button
            onClick={handleSeeForm}
            className="px-4 py-1 my-2 rounded-lg bg-white"
          >
            Crear Turno
          </button>
        </div>

        {/* {!newPatientButton && <TablePatient />} */}
        {newPatientButton && <NewTurn />}
      </div>
    </div>
  )
}
