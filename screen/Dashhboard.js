import { useEffect, useState } from "react";
import { Text } from "react-native";
import { fetchData } from "../Util/http";
import { addUserDetails } from "../Store/CustomerName";
import { useDispatch } from "react-redux";
export default function Dashboard({ navigation }) {
  const dispatch = useDispatch();
  useEffect(() => {
    async function gethere() {
      const userData = await fetchData();
      dispatch(addUserDetails(userData));
    }

    gethere();
  }, []);
  return (
    <>
    <Text>Welcome Home</Text>
      {/* <Text onPress={() => navigation.navigate('SignupForm')}>SignOut</Text> */}
    </>
  );
}
