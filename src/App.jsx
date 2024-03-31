import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      {JSON.stringify(users)}
    </div>
  );
}

export default App;
