import api from "./Rule_API";

export const tareasAll = async () => {
  let url = "/task";
  return await api
    .get(url)
    .then((resultado) => {
      return resultado.data;
    })
    .catch((error) => {
      throw error.response.data.error || "Error procesando la solicitud";
    });
};
