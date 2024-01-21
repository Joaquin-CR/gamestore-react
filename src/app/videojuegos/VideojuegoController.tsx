'use client';
import { useEffect, useState } from 'react';
import { Videojuego } from '../../../types';

export default function VideojuegoController() {
  const [videojuegosList, setVideojuegosList] = useState<Videojuego[]>([]);
  const [loadInfo, setLoadInfo] = useState<boolean>(true);

  async function getData() {
    try {
      const response = await fetch('/api/videojuegos/getVideojuegos', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response) {
        // setProductList(list);
        const data = await response.json();
        console.log(data);
        setVideojuegosList(data);
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
  }, [videojuegosList, loadInfo]);

  return { videojuegosList, loadInfo };
}
