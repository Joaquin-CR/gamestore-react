'use client';
import { useEffect, useState } from 'react';
import { Proveedor } from '../../../types';

export default function ProveedoresController() {
  const [proveedoresList, setProveedoresList] = useState<Proveedor[]>([]);
  const [loadInfo, setLoadInfo] = useState<boolean>(true);

  async function getData() {
    try {
      const response = await fetch('/api/proveedores/getProveedores', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response) {
        const data = await response.json();
        setProveedoresList(data);
      } else {
        // Handle non-200 response status codes (e.g., network error)
        setLoadInfo(false);
      }
    } catch (error) {
      console.error(error);
      setLoadInfo(false);
      // Handle unexpected errors here
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setLoadInfo(false);
  }, [proveedoresList, loadInfo]);

  return { proveedoresList, loadInfo };
}
