import { useState, useEffect } from "react";
import User from "./User";
import "./UserList.css";
function UserList() {
  const [people, setPeople] = useState([]);
  const [number, setNumber] = useState(10);
  const [gender, setGender] = useState("");

  useEffect(() => {
    const url = `https://randomuser.me/api/?inc=email,gender,name,picture&results=${number}&gender=${gender}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setPeople(data.results));
  }, [number, gender]);

  function handleNumber(event) {
    setNumber(event.target.value);
  }

  function handleSelect(event) {
    const value = event.target.value;
    const clean = value.toLowerCase();
    setGender(clean);
  }
  return (
    <div>
      <header className="App-header">
        <form>
          <input type="number" min="1" max="30" onChange={handleNumber}></input>
          <select className="selection" onChange={handleSelect}>
            <option>All</option>
            <option>Female</option>
            <option>Male</option>
          </select>
        </form>
      </header>
      <main>{people && <User data={people} />}</main>
    </div>
  );
}

export default UserList;
