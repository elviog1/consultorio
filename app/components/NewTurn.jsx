import React from "react";
export default function NewTurn() {
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
        <label htmlFor="time" className="text-white font-bold">
          Hora
        </label>
        <select>
            <option>10:00</option>
            <option>10:30</option>
            <option>11:00</option>
            <option>11:30</option>
            <option>12:00</option>
            <option>12:30</option>
            <option>13:00</option>
            <option>13:30</option>
            <option>14:00</option>
            <option>14:30</option>
            <option>15:00</option>
            <option>15:30</option>
        </select>
        <input
          id="time"
          placeholder="Ingrese el email del paciente"
          type="number"
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
