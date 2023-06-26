import Link from "next/link";
import React from "react";

export default function TablePatient({ params }) {
  console.log(params);
  const users = [
    {
      id: 1,
      name: "Elvio",
      lastname: "Galeano",
      date: "1993-09-29",
      phone: 1123232323,
    },
    {
      id: 2,
      name: "Max",
      lastname: "Galeano",
      date: "1993-09-29",
      phone: 1123232323,
    },
    {
      id: 3,
      name: "yeye",
      lastname: "Galeano",
      date: "1993-09-29",
      phone: 1123232323,
    },
    {
      id: 4,
      name: "marmaaaaaa",
      lastname: "tanatata",
      date: "1993-09-29",
      phone: 1123232323,
    },
    {
      id: 5,
      name: "vilmix",
      lastname: "Cardox",
      date: "1993-09-29",
      phone: 1123232323,
    },
  ];
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
              {/* <th className="py-2 px-4 bg-sky-200">Email</th> */}
              <th className="py-2 px-4 bg-sky-200 rounded-tr-lg">Telefono</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.name} className="">
                <td className="py-2 px-4">
                  <Link href="/patients/[id]" as={`/patients/${item.id}`}>
                    {item.id}
                  </Link>
                </td>
                <td className="py-2 px-4">
                  <Link href="/patients/[id]" as={`/patients/${item.id}`}>
                    {item.name}
                  </Link>
                </td>
                <td className="py-2 px-4">
                  <Link href="/patients/[id]" as={`/patients/${item.id}`}>
                    {item.lastname}
                  </Link>
                </td>
                <td className="py-2 px-4">
                  <Link href="/patients/[id]" as={`/patients/${item.id}`}>
                    {item.date}
                  </Link>
                </td>
                <td className="py-2 px-4">
                  <Link href="/patients/[id]" as={`/patients/${item.id}`}>
                    {item.phone}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
