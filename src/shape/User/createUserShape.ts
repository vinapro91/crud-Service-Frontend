import * as yup from "yup";


const createUserShape = yup.object().shape({
  fullName: yup.string().required("Nome obrigatório"),
  cpf: yup.string().matches(/([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/, "CPF inválido "),
  alias: yup.string().required("Apelido obrigatório"),
  gender: yup.string(),
  comments: yup.string(),
  phone: yup.string().required(""),

});

export {createUserShape}