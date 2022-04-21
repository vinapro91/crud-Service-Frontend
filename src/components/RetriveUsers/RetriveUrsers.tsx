import { IUserInterface } from "../../Interfaces/IUserInterface";
import { deleteUser } from "../../services/deleteUser";

const RetriveUser = ({id, fullName, alias, cpf,gender, createdAt, updatedAt, profilePicture}:IUserInterface | any) => {
  

  return(
    <div className="user-container" key={id}>  
      <div className="profile-top">
        <figure>
          <img src={profilePicture} alt="profilePicture"/>
        </figure>
        <div>
          <p><span>Id: </span>{id}</p>
          <p><span>Nome: </span>{fullName}</p>
        </div>
      </div>
      <p><span>Cpf: </span>{cpf}</p>
      <p><span>Apelido: </span>{alias}</p>
      <p><span>Criado em: </span>{createdAt}</p>
      <p><span>Atualizado em: </span>{updatedAt}</p>
      <p><span>Genero: </span>{gender}</p>
      <button onClick={()=> deleteUser(id)}>Delete</button>
    </div>
  )
}

export default RetriveUser;