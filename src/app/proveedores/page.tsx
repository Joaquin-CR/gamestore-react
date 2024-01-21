'use client';
import ProveedoresController from './ProveedoresController';

export default function Page() {
  const controllerProveedor = ProveedoresController();
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="font-semibold leading-6 text-white text-3xl">
                  Lista de Proveedores
                </h1>
                <p className="mt-5 text-sm text-gray-300">
                  Se muestran la lista de todos los proveedores dados de alta
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                  type="button"
                  className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Nuevo Proveedor
                </button>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    {controllerProveedor.proveedoresList.length > 0 ? (
                      <>
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                            >
                              Clave
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                            >
                              Nombre
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                            >
                              Correo
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                            >
                              Telefono
                            </th>
                            <th
                              scope="col"
                              className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                            >
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                          {controllerProveedor.proveedoresList.map(
                            (proveedor) => (
                              <tr className="group" key={proveedor.cve_prov}>
                                <td className="whitespace-nowrap select-none py-4 pl-4 pr-3 text-sm font-medium text-white group-hover:cursor-pointer group-hover:bg-gray-700">
                                  {proveedor.cve_prov}
                                </td>
                                <td className="whitespace-nowrap select-none px-3 py-4 text-sm text-gray-300 group-hover:cursor-pointer group-hover:bg-gray-700">
                                  {proveedor.nom_prov}
                                </td>
                                <td className="whitespace-nowrap select-none px-3 py-4 text-sm text-gray-300 group-hover:cursor-pointer group-hover:bg-gray-700">
                                  {proveedor.email_prov}
                                </td>
                                <td className="whitespace-nowrap select-none px-3 py-4 text-sm text-gray-300 group-hover:cursor-pointer group-hover:bg-gray-700">
                                  {proveedor.tel_prov}
                                </td>
                                <td className="relative py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                  <p
                                    className="text-indigo-400 hover:text-indigo-300 select-none cursor-pointer"
                                    // (click)="editarProveedor(prov.cve_prov)"
                                  >
                                    Editar
                                  </p>
                                </td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </>
                    ) : (
                      <p className="text-gray-300">
                        No hay proveedores para mostrar
                      </p>
                    )}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
