import Link from 'next/link'
import React from 'react'

export default function page({params}) {
  const {id} = params
  // console.log(id)
  return (
    <main className='min-h-screen flex justify-center items-center'>
      <div className=' '>
      <form className=" bg-sky-300 shadow-xl max-w-xl bg-opacity-70 m-auto p-4 rounded-lg mt-2">
      {/* <div className="flex flex-col">
        <label htmlFor="nombre" className="text-white font-bold">
          ID
        </label>
        <input
          id="nombre"
          placeholder="Ingrese el nombre del paciente"
          type="email"
          className="px-4 py-1 my-2 rounded-lg"
        />
      </div> */}
      <div className='flex gap-5'>
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
          type="text"
          className="px-4 py-1 my-2 rounded-lg"
        />
      </div>
      </div>
      {/* <div className="flex flex-col">
        <label htmlFor="email" className="text-white font-bold">
          Email
        </label>
        <input
          id="email"
          placeholder="Ingrese el email del paciente"
          type="email"
          className="px-4 py-1 my-2 rounded-lg"
        />
      </div> */}
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
      <label htmlFor="historial" className="text-white font-bold">
          Historial
        </label>
      <textarea className='w-full resize-none' rows={10}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, ab eum quia laborum ea cupiditate earum dolore similique debitis, porro id incidunt quasi voluptatum! Praesentium minima laboriosam sed quibusdam eius!</textarea>
      <div className="flex  gap-2 justify-between mt-2">
        <Link className="bg-white text-center px-4 rounded-md py-1 w-full" href='/patients'>Salir</Link>
        <button
          className="bg-white text-center px-4 rounded-md py-1 w-full"
        >
          Guardar
        </button>
      </div>
    </form>
      </div>
    </main>
  )
}
