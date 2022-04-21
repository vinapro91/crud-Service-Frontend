import { toast } from "react-toastify";
import { api } from "./api";

const deleteUser =(id:string):void => {
  api.delete(`/users/${id}`).then((response) => console.log(response)).then(() => toast.success("Usuário deletado com sucesso!")).catch((e) => toast.error("Erro ao deletar usuário!"));
}


export {deleteUser};
