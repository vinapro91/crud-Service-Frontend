import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createUserShape } from "../../shape/User/createUserShape";
import { api } from "../../services/api";
import { toast } from 'react-toastify';
import Button from "../Button/Button";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createUserShape),
  });
  const onSubmitFunction = (data:any) => {
    api.post("/users", data).then((response) => console.log(response)).then(() => toast.success("Usuário criado com sucesso!")).catch((e) => toast.error("Erro ao criar usuário!"));
    setTimeout(window.location.reload, 5000);
  };
  
  return (
    <div className="Container">
      <div>
        <div className="header-form">
          <h3>Criar Usuário</h3>
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
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
          <Button type="submit" name="Cadastrar"/> 
        </form>
      </div>
    </div>
  );
}

export default Form;
