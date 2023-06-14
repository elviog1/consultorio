import React from "react";

export default function TablePatient() {
  return (
    <div>
      <div className="flex justify-center gap-4">
        <input
          placeholder="Buscar paciente..."
          className="px-4 py-1 my-2 rounded-lg"
        />
        <button className="px-4 py-1 my-2 rounded-lg bg-white">Buscar</button>
      </div>
      <div className="max-h-96 max-w-4xl overflow-auto    flex flex-col gap-5">
        <table className="bg-white  rounded-lg">
          <thead className=" rounded-lg">
            <tr className="">
              <th className="py-2 px-4 bg-sky-200 rounded-tl-lg">Id</th>
              <th className="py-2 px-4 bg-sky-200">Nombre</th>
              <th className="py-2 px-4 bg-sky-200">Apellido</th>
              <th className="py-2 px-4 bg-sky-200">Nacimiento</th>
              <th className="py-2 px-4 bg-sky-200">Email</th>
              <th className="py-2 px-4 bg-sky-200 rounded-tr-lg">Telefono</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="py-2 px-4">1</td>
              <td className="py-2 px-4">Elvio</td>
              <td className="py-2 px-4">Galeano</td>
              <td className="py-2 px-4">1993-09-29</td>
              <td className="py-2 px-4">elvio.galeano827@gmail.com</td>
              <td className="py-2 px-4">1123232323</td>
            </tr>
            <tr className="bg-green-200">
              <th colSpan={6}>Historial</th>
            </tr>
            <tr className=" ">
              <td className="py-2 px-4 rounded-b-lg" colSpan={6}>
                asdadsadsda sdasd asda sda sd sdadsadsda sdasd asda sda sd
                sdadsadsda sdasd asda sda sd sdadsaasda sda sd sdadsadsda sdasd
                asda sda sd sdadsadsda sdasd asda sda sd sdadsaasda sda sd
                sdadsadsda sdasd asda sda sd sdadsadsda sdasd asda sda sd
                sdadsaasda sda sd sdadsadsda sdasd asda sda sd sdadsadsda sdasd
                asda sda sd sdadsadsda sdasd asda sda sd sdadsadsda sdasd asda
                sda sd sdadsadsda sdasd asda sda sd{" "}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="bg-white  rounded-lg">
          <thead className=" rounded-lg">
            <tr className="">
              <th className="py-2 px-4 bg-sky-300 rounded-tl-lg">Id</th>
              <th className="py-2 px-4 bg-sky-300">Nombre</th>
              <th className="py-2 px-4 bg-sky-300">Apellido</th>
              <th className="py-2 px-4 bg-sky-300">Nacimiento</th>
              <th className="py-2 px-4 bg-sky-300">Email</th>
              <th className="py-2 px-4 bg-sky-300 rounded-tr-lg">Telefono</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="py-2 px-4">2</td>
              <td className="py-2 px-4">Maxmax</td>
              <td className="py-2 px-4">Galeano</td>
              <td className="py-2 px-4">1993-09-29</td>
              <td className="py-2 px-4">maxmax@gmail.com</td>
              <td className="py-2 px-4">1123232323</td>
            </tr>
            <tr className="bg-sky-200">
              <th colSpan={6}>Historial</th>
            </tr>
            <tr className=" ">
              <td className="py-2 px-4 rounded-b-lg" colSpan={6}>
                asdadsadsda sdasd asda sda sd sdadsadsda sdasd asda sda sd
                sdadsadsda sdasd asda sda sd sdadsaasda sda sd sdadsadsda sdasd
                asda sda sd sdadsadsda sdasd asda sda sd sdadsaasda sda sd
                sdadsadsda sdasd asda sda sd sdadsadsda sdasd asda sda sd
                sdadsaasda sda sd sdadsadsda sdasd asda sda sd sdadsadsda sdasd
                asda sda sd sdadsadsda sdasd asda sda sd sdadsadsda sdasd asda
                sda sd sdadsadsda sdasd asda sda sd{" "}
              </td>
            </tr>
          </tbody>
        </table>
        <table className="bg-white  rounded-lg">
          <thead className=" rounded-lg">
            <tr className="">
              <th className="py-2 px-4 bg-sky-300 rounded-tl-lg">Id</th>
              <th className="py-2 px-4 bg-sky-300">Nombre</th>
              <th className="py-2 px-4 bg-sky-300">Apellido</th>
              <th className="py-2 px-4 bg-sky-300">Nacimiento</th>
              <th className="py-2 px-4 bg-sky-300">Email</th>
              <th className="py-2 px-4 bg-sky-300 rounded-tr-lg">Telefono</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="py-2 px-4">3</td>
              <td className="py-2 px-4">yeyeye</td>
              <td className="py-2 px-4">Galeano</td>
              <td className="py-2 px-4">1993-09-29</td>
              <td className="py-2 px-4">eeeeyeee@gmail.com</td>
              <td className="py-2 px-4">1123232323</td>
            </tr>
            <tr className="bg-sky-200">
              <th colSpan={6}>Historial</th>
            </tr>
            <tr className=" ">
              <td className="py-2 px-4 rounded-b-lg" colSpan={6}>
                asdadsadsda sdasd asda sda sd sdadsadsda sdasd asda sda sd
                sdadsadsda sdasd asda sda sd sdadsaasda sda sd sdadsadsda sdasd
                asda sda sd sdadsadsda sdasd asda sda sd sdadsaasda sda sd
                sdadsadsda sdasd asda sda sd sdadsadsda sdasd asda sda sd
                sdadsaasda sda sd sdadsadsda sdasd asda sda sd sdadsadsda sdasd
                asda sda sd sdadsadsda sdasd asda sda sd sdadsadsda sdasd asda
                sda sd sdadsadsda sdasd asda sda sd{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
