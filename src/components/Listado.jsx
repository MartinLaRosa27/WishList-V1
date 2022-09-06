import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

export const Listado = (props) => {
  const [deseo, setDeseo] = useState([]);
  const urlGet = `http://${process.env.REACT_APP_BACKEND_URL}/get-deseo/${props.user}`;
  const urlDelete = `http://${process.env.REACT_APP_BACKEND_URL}/delete-deseo`;

  const getDeseo = async () => {
    try {
      await axios.get(`${urlGet}`).then((res) => {
        setDeseo(res.data);
      });
    } catch (e) {
      setDeseo([]);
    }
  };

  const deleteDeseo = async (e, id) => {
    try {
      await axios.delete(`${urlDelete}/${id}`).then((res) => {
        alert(res.data);
      });
    } catch (e) {
      alert("No se pudo eliminar");
    }
  };

  useEffect(() => {
    getDeseo();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home | WishList</title>
      </Helmet>
      <ul className="list-group mt-5">
        {deseo.map((valor) => {
          return (
            <li className="list-group-item" key={valor._id}>
              <form onSubmit={(e) => deleteDeseo(e, valor._id)}>
                <button
                  type="submit"
                  className="btn-close"
                  aria-label="Close"
                ></button>
                {valor.descripcion}
              </form>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
