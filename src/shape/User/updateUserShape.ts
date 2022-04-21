import * as yup from "yup";


const updateUserShape = yup.object().shape({
  id: yup.string().required("Id obrigatório"),
  fullName: yup.string(),
  cpf: yup.string().notRequired().matches(/([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})/, "CPF inválido "),
  alias: yup.string(),
  gender: yup.string(),
  comments: yup.string(),
  phone: yup.string(),
});

export {updateUserShape}