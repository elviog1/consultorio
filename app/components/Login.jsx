import Link from 'next/link'
import React from 'react'

export default function Form() {
  return (
        <form className=' bg-sky-600 shadow-xl bg-opacity-70 m-auto p-4 rounded-lg '>
            <div className='flex flex-col'>
                <label htmlFor='email' className='text-white font-bold'>Email</label>
                <input id='email' placeholder='Ingrese su correo electronico' type='email' className='px-4 py-1 my-2 rounded-lg' />
            </div>
            <div className='flex flex-col'>
                <label htmlFor='password' className='text-white font-bold'>Contraseña</label>
                <input id='password' placeholder='Ingrese su contraseña' type='password' className='px-4 py-1 my-2 rounded-lg' />
            </div>
            <div className='flex justify-between mt-2'>
                {/* <button className='bg-white px-4 rounded-md py-1'>Crear Usuario</button> */}
                <Link href={'/patients'} className='bg-white text-center px-4 rounded-md py-1 w-full'>Ingresar</Link>
            </div>
        </form>

  )
}
