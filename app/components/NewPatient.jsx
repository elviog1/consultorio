import Link from "next/link";
import React from "react";

export default function NewPatient() {
  return (
    <form className=" bg-sky-300 shadow-xl bg-opacity-70 m-auto p-4 rounded-lg mt-2">
      <div className="flex flex-col">
        <label htmlFor="nombre" className="text-white font-bold">
          Nombre
        </label>
        <input
          id="nombre"
          placeholder="Ingrese el nombre del paciente"
          type="email"
          className="px-4 py-1 my-2 rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="apellido" className="text-white font-bold">
          Apellido
        </label>
        <input
          id="apellido"
          placeholder="Ingrese el apellido del paciente"
          type="password"
          className="px-4 py-1 my-2 rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-white font-bold">
          Email
        </label>
        <input
          id="email"
          placeholder="Ingrese el email del paciente"
          type="email"
          className="px-4 py-1 my-2 rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="date" className="text-white font-bold">
          Nacimiento
        </label>
        <input
          id="date"
          type="date"
          className="px-4 py-1 my-2 rounded-lg"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="telefono" className="text-white font-bold">
          Telefono
        </label>
        <input
          id="telefono"
          type="number"
          placeholder="Ej: 1123232323"
          className="px-4 py-1 my-2 rounded-lg"
        />
      </div>
      <div className="flex justify-between mt-2">
        {/* <button className='bg-white px-4 rounded-md py-1'>Crear Usuario</button> */}
        <button
          className="bg-white text-center px-4 rounded-md py-1 w-full"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}
