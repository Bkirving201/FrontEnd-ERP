import React, { useState, useEffect } from "react";
const ApiProductos = "http://localhost:4000/productos";

const Api = () => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productos, setProducto] = useState([]);
  const [arePlayersLoaded, setArePlayersLoaded] = useState(false);

  //Aquí vamos a trabar código de JS - Asymc / Await
  const getDataApi = async () => {
    try {
      //Hacemos fetch de la API y se lo asignamos  a una variable
      const response = await fetch(ApiProductos);
      //Convertimos la respuesta a JSON
      const data = await response.json();
      //Asignamos la data a nuestro estado
      setData(data);
      //Imprimimos la data en consola
      console.log(data);
      //Cambiamos el estado de isLoading a false esto nos servirá para un loader
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getPlayers = async () => {
    try {
      const response = await fetch(ApiProductos);
      const data = await response.json();
      setProducto(data.productos);
      setArePlayersLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDataApi();
    getPlayers();
  }, []);

  return (
    <>
      {
        //Si isLoading es true mostramos el loader
        isLoaded ? (
          data.map((informacion) => {
            return (
              <div key={informacion.id}>
                <h3>{informacion.name}</h3>
                <h3>{informacion.phone}</h3>
                <hr></hr>
              </div>
            );
          })
        ) : (
          <h1>Cargando...</h1>
        )
      }
      {arePlayersLoaded ? (
        productos.map((productos) => {
          return (
            <div key={productos.id}>
              <h3>{productos.ProductoName}</h3>
            </div>
          );
        })
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};

export default Api;
