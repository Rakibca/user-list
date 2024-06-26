import { useEffect, useState } from "react";
import User from "./User";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const controller = new AbortController();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: AbortController.signal,
    })
      //fetch("users.json")
      .then((res) => res.json())
      .then(setUsers)
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>User List</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users.map((user) => {
            return <User key={user.id} name={user.name} />;
          })}
        </ul>
      )}
    </>
  );
}

export default App;
