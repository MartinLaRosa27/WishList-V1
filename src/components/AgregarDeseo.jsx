import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";

export const AgregarDeseo = (props) => {
  const descripcion = useRef();
  const urlPost = `http://${process.env.REACT_APP_BACKEND_URL}/post-deseo`;

  const postDeseo = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(urlPost, { descripcion: descripcion.current.value, user_email: props.user })
        .then((res) => {
          alert(res.data);
        });
      window.location.reload();
    } catch (e) {
      alert("No se pudo guardar el deseo.");
    }
  };

  return (
    <div className="mt-5">
      <Helmet>
        <title>Agregar Deseo | WishList</title>
      </Helmet>
      <form method="POST" onSubmit={(e) => postDeseo(e)}>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">
            Gurdar deseo:
          </label>
          <input
            type="text"
            className="form-control"
            ref={descripcion}
            aria-describedby="descripcion"
            required
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
};
