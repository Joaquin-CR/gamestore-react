'use client';

import VideojuegoController from './VideojuegoController';

export default function Page() {
  const controllerVideojuego = VideojuegoController();
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 py-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h1 className="font-semibold leading-6 text-white text-3xl">
                  Lista de Videojuegos
                </h1>
                <p className="mt-5 text-sm text-gray-300">
                  Se muestran la lista de todos los videojuegos dados de alta
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <button
                  type="button"
                  className="block rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Nuevo Videojuego
                </button>
              </div>
            </div>
            <div className="mt-8 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700">
                    {controllerVideojuego.videojuegosList.length > 0 ? (
                      <>
                        <thead className="px-3">
                          <tr>
                            <th
                              scope="col"
                              className="py-3.5 px-3 text-center text-sm font-semibold text-white sm:pl-0 select-none"
                            >
                              Clave
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-center text-sm font-semibold text-white select-none"
                            >
                              Titulo
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-center text-sm font-semibold text-white select-none"
                            >
                              Precio
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-center text-sm font-semibold text-white select-none"
                            >
                              Proveedor
                            </th>
                            <th
                              scope="col"
                              className="px-3 py-3.5 text-center text-sm font-semibold text-white select-none"
                            >
                              Inventarios
                            </th>
                            <th
                              scope="col"
                              className="relative py-3.5 pr-4 sm:pr-0"
                            >
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                          {controllerVideojuego.videojuegosList.map(
                            (videojuego) => (
                              <tr className="group" key={videojuego.cve_vid}>
                                <td
                                  // (click)="goToVidoejuego(vid.cve_vid)"
                                  className="select-none py-4 px-3 text-sm font-medium text-white text-center group-hover:bg-gray-700 group-hover:cursor-pointer"
                                >
                                  {videojuego.cve_vid}
                                </td>
                                <td
                                  // (click)="goToVidoejuego(vid.cve_vid)"
                                  className="select-none px-3 py-4 text-sm text-white text-center group-hover:bg-gray-700 group-hover:cursor-pointer"
                                >
                                  {videojuego.tit_vid}
                                </td>
                                <td
                                  // (click)="goToVidoejuego(vid.cve_vid)"
                                  className="select-none px-3 py-4 text-sm text-white text-center group-hover:bg-gray-700 group-hover:cursor-pointer"
                                >
                                  $
                                  {
                                    videojuego.pre_vid
                                    // | currency : "MXN" : "symbol-narrow" : "1.2-2"
                                  }
                                </td>
                                <td
                                  // (click)="goToVidoejuego(vid.cve_vid)"
                                  className="select-none px-3 py-4 text-sm text-white text-center group-hover:bg-gray-700 group-hover:cursor-pointer"
                                >
                                  <p className="hidden">
                                    {videojuego.proveedorId}
                                  </p>
                                  {videojuego.nombreProveedor}
                                </td>
                                <td
                                  // (click)="goToVidoejuego(vid.cve_vid)"
                                  className="select-none px-3 py-4 text-sm text-white text-center group-hover:bg-gray-700 group-hover:cursor-pointer"
                                >
                                  {videojuego.inv_vid}
                                </td>
                                <td className="py-4 px-3 text-sm font-medium text-center flex">
                                  <p
                                    className="text-indigo-400 hover:text-indigo-300 select-none cursor-pointer text-center"
                                    // (click)="editarvideojuego(vid.cve_vid)"
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
                        No hay videojuegos para mostrar
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
