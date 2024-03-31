import { useEffect, useState } from "react";
import User from "./User";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      //fetch("users.json")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <>
      <h1>User List</h1>
      <ul>
        {users.map((user) => {
          return <User key={user.id} name={user.name} />;
        })}
      </ul>
    </>
  );
}

export default App;
