import { useContext } from "react";

import UsuariosContext from "../context/UsuariosProvider";

const useUsuarios = () => {
  return useContext(UsuariosContext);
};
export default useUsuarios;
