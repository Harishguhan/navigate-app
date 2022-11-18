import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { fetchData } from "../Util/http";
import { addUserDetails } from "../Store/CustomerName";
import { useDispatch,useSelector } from "react-redux";
export default function Dashboard({ navigation }) {

    const userDetails = useSelector(state => state.names.userDetails);
    console.log(userDetails,"my data")
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
    <View>
        <Text>Welcome Users!!!</Text>
        { userDetails.map((data) => {
            data.map(val => {
                return(
                    <Text>{val.username}</Text>
                );
            })
        }) }
    </View>
    </>
  );
}
