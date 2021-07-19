import "./User.css";

function User({ data }) {
  return data.map((person) => {
    return (
      <div
        className={`
          person ${person.gender === "female" ? "female" : "male"} `}
      >
        <img src={person.picture.medium} alt={`${person.name.first}`} />

        <p>{`This is: ${person.name.title} ${person.name.first} ${person.name.last}`}</p>
      </div>
    );
  });
}

export default User;
