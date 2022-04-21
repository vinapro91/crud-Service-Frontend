
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserShape } from "../../shape/User/updateUserShape";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import Button from "../Button/Button";

const UpdateForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateUserShape),
  });
  const onSubmitFunction = (data:any) => {
    if (data.fullName === "") {
      delete data.fullName;
    }
    if (data.cpf === "") {
      delete data.cpf;
    }
    if (data.alias === "") {
      delete data.alias;
    }
    if (data.gender === "") {
      delete data.gender
    }
    if (data.phone === "") {
      delete data.phone
    }
    if (data.comments === ""){
      delete data.comments
    }
    if (data.profilePicture === "") {
      delete data.profilePicture
    }

    api.patch(`/users/${data.id}`, data).then((response) => console.log(response)).then(() => toast.success("Usuário atualizado com sucesso!")).catch((e) => toast.error("Erro ao atualizar usuário!"));
  };
  
  return (
    <div className="Container">
      <div>
      <div className="header-form">
          <h3>Atualizar Usuário</h3>
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
        <input
            className="input"
            placeholder="id"
            {...register("id")}
          />
          <p>{errors.id?.message}</p>
          <input
            className="input"
            placeholder="nome completo"
            {...register("fullName")}
          />
          <p>{errors.fullName?.message}</p>
          <p>{errors.email?.message} </p>
          <input
            className="input"
            placeholder="cpf"
            {...register("cpf")}
          />
          <p>{errors.cpf?.message} </p>
          <input
            className="input"
            placeholder="alias"
            {...register("alias")}
          />
          <p>{errors.alias?.message} </p>
          <input
            className="input"
            placeholder="Genero"
            {...register("gender")}
          />
          <p>{errors.gender?.message} </p>
          <input
            className="input"
            placeholder="Telefone"
            {...register("phone")}
          />
          <p>{errors.phone?.message} </p>
          <input
            className="input"
            placeholder="observações"
            {...register("comments")}
          />
          <p>{errors.comments?.message} </p>
          <input
            className="input"
            placeholder="Imagem de perfil"
            {...register("profilePicture")}
          />
          <p>{errors.profilePicture?.message} </p>
          <Button type="submit" name="Atualizar"/>
        </form>
      </div>
    </div>
  );
}

export default UpdateForm;
