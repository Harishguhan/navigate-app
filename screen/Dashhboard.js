import { useEffect, useState } from "react";
import { Text } from "react-native";
import { fetchData } from "../Util/http";

export default function Dashboard({ navigation }) {

//     const [fetchedData,setFetchedData]= useState([]);
//   useEffect(() => {
//     async function gethere() {
//     const userData = await fetchData();
//     setFetchedData(userData,"I am from database");
//     }

//     gethere();
//   },[]);
  return (
    <>
      <Text>Welcome</Text>
      {/* <Text onPress={() => navigation.navigate('SignupForm')}>SignOut</Text> */}
    </>
  );
}
