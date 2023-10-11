import api from "./Rule_API";

export const registerUsuario = async (user) => {
  const url = "/register"; 
  try {
    const response = await api.post(url, user);
    return response.data;
  } catch (error) {
    throw error.response.data.error || "No se pudo registrar el usuario, intente nuevamente";
  }
};
