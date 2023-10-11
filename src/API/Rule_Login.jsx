import api from "./Rule_API";

export const loginUsuario = async (user) => {
  const url = "/login"; 
  try {
    const response = await api.post(url, user);
    return response.data;
  } catch (error) {
    throw error.response.data.error || "Mail o contraseña incorrecta, porfavor intente nuevamente";
  }
};
