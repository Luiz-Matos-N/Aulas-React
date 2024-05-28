import { useState } from "react";
import styles from "./MyForm.module.css";

const MyForm = ({ user }) => {
  //6 - ontrolled input

  //3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState(user ? user.bio : "");

  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  // console.log(name);
  // console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email, bio, role);

    //7 - Limpando formulários
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div className={styles.main}>
      {/* 5 - Envio de form */}
      {/* 1 - Criação de forms */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/*2 - Label envolvendo o input */}
        <label>
          <span>E-mail:</span>
          {/* 4 - Simplificação de manipulação de state */}
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>
            <textarea
              name="bio"
              id="bio"
              placeholder="Descrição do usuário"
              onChange={(e) => {
                setBio(e.target.value);
              }}
              value={bio}
            ></textarea>
          </span>
        </label>
        {/* 9 - select */}
        <label>
          <span>Função</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
