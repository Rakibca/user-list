import { useEffect, useState } from "react";
import User from "./User";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(setUsers);
  });

  // function addUser() {
  //   setUsers((currentUsers) => {
  //     return [{ id: users.id, name: users.name }, ...currentUsers];
  //   });
  //  }

  return null;
  // (
  //   <>
  //     <h1>User List</h1>
  //     <li>{JSON.stringify(users)}</li>;
  //     addUser();
  //     {users.map((user) => {
  //       return (
  //         <ul key={user.id}>
  //           <User name={user.name} />
  //         </ul>
  //       );
  //     })}
  //   </>
  // );
}

export default App;
