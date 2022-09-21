import { useState, useEffect } from "react";
import "./App.css";
import SocialCard from "./SocialCard";


function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);


  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        userData = await response.json();
        console.log(userData)
      } catch (error) {
        console.log(error);
      }
      setAllUsers(userData);
      setUsers(userData);
    })();
  }, []);

  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  const removeitem = id => {
    const removeditem = users.filter(data => data.id != id)
    console.log('removed', id)
    setUsers(removeditem)
  }

  return (
    <div className="App">
      <h1>Social Cards</h1>
      <input className="search-box" onInput={filterCards} placeholder="Search..." />
      <div className="cards-container">

        {users.map((user, index) => (
          <SocialCard key={index} userData={user} removeitem={removeitem} />
        ))}
      </div>
    </div>
  );
}

export default App;
