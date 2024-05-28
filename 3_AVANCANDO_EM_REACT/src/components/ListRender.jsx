import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "José", "Maria"]);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Matheus",
      age: 31,
    },
    {
      id: 2,
      name: "André",
      age: 21,
    },
    {
      id: 3,
      name: "Momo",
      age: 15,
    },
    {
      id: 4,
      name: "Lisa",
      age: 78,
    },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 5);

    setUsers((prevUsers) => {
      console.log(prevUsers);
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <div>
      <div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={deleteRandom}>Delete random user</button>
      </div>
    </div>
  );
};

export default ListRender;
