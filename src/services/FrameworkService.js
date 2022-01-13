// Importamos axios
import axios from "axios";

// Creamos la base de las peticiones, con los datos necesarios
const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "applicacion/json",
    "Content-Type": "application/json",
  },
});

// Exportamos los métodos para las peticiones
export default {
  getEvents() {
    return apiClient.get("/frameworks");
  },
};