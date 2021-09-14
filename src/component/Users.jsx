import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Users = (props) => {
  let query = useQuery();
  // let ab = props.onSearch;

  console.log(props.value);
  const [item, setItem] = useState("");
  // const getUser = async () => {
  //   const ab = await fetch(
  //     "https://thronesapi.com/api/v2/Characters" + query.get("id")
  //   );
  //   // const ab = await fetch("https://api.github.com/users");
  //   setItem(await ab.json());
  //   console.log(item);
  // };
  const getUser = async () => {
    const response = await fetch(
      "https://thronesapi.com/api/v2/Characters/" + query.get("id")
    );
    setItem(await response.json());
    console.log(response);
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>user Id:{item.id}</h2>
        <img style={{ margin: "auto" }} src={item.imageUrl} alt="" />
        <h4>FirstName: {item.firstName}</h4>
        <h4>fullName: {item.fullName}</h4>
        <h4>Title:{item.title}</h4>
        <h4>Family:{item.family}</h4>
      </div>
    </>
  );
};

export default Users;
