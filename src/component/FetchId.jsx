import React, { useState, useEffect } from "react";
// import { useHistory } from "react-router";
// import Users from "./Users";
import { Link } from "react-router-dom";
import styles from "./Todos.module.css";
const Todos = () => {
  const [user, setUser] = useState([]);
  // const [filter,setFilter] = useState()
  // const history = useHistory();
  const getUser = async () => {
    const ab = await fetch("https://thronesapi.com/api/v2/Characters");
    setUser(await ab.json());
  };
  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = user.filter((data) => {
      return data.fullName.search(value) != -1;
    });
    setUser(result);
    console.log(user);
  };
  // const pa = () => {
  //   const path = `user`;
  //   // let history = useHistory();
  //   history.push(path);
  // };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <h2 className={styles.heading}>TodoList Ids</h2>
      <div className={styles.bar}>
        <input
          type="text"
          name=""
          id=""
          onChange={(event) => handleSearch(event)}
        />
      </div>

      {user.map((curElem, arr) => {
        return (
          <>
            <div className={styles.cont} key={arr}>
              <h4>Id: {curElem.id}</h4>
              <h4>Name:{curElem.fullName} </h4>
              <Link className={styles.show} to={`/user?id=${curElem.id}`}>
                Show More
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Todos;
