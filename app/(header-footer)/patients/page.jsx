"use client";
import NewPatient from "@/app/components/NewPatient";
import TablePatient from "@/app/components/TablePatient";
import React, { useState } from "react";
export default function page() {
  const [newPatientButton, setNewPatientButton] = useState(false);

  const handleSeeForm = () => {
    setNewPatientButton(!newPatientButton);
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-white font-bold text-center ">Paciente</h1>
        <div className="flex gap-5">
          <button
            onClick={handleSeeForm}
            className="px-4 py-1 my-2 rounded-lg bg-white"
          >
            Ver Pacientes
          </button>
          <button
            onClick={handleSeeForm}
            className="px-4 py-1 my-2 rounded-lg bg-white"
          >
            Crear Pacientes
          </button>
        </div>

        {!newPatientButton && <TablePatient />}
        {newPatientButton && <NewPatient />}
      </div>
    </div>
  );
}
