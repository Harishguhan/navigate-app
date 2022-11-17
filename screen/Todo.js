import { useState } from "react";
import { useContext } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Context } from "../Context/Context";

import { useSelector } from "react-redux";

export default function Todo() {
  const newDate = useContext(Context);

  const values = useSelector((state) => state.names)

  const [input, setInput] = useState("");

  const submitHandler = (input) => {
    newDate.addname(input);
    setInput('')
    }
  const renderName = (itemDate,index) => {
    return <Text>{itemDate.item}</Text>;
  };
  return (
    <>
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        placeholder="Add a new Name"
        value={input}
        onChangeText={(text) => setInput(text)}
      />
      <Button title="Add Name" onPress={() => submitHandler(input)} />

      <FlatList
        data={newDate.name}
        keyExtractor={(item,index) => index.toString()}
        renderItem={renderName}
      />
    </View>
    <View>
    <View>
        {values.map((data) => {
            return(
                <View style={styles.box}>
                    <Text>{data.name}</Text>
                </View>
            );
        })}
    </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
   title: {
    marginTop:20,
    marginLeft: 20,
    fontSize: 30,
   },
   input: {
    borderRadius: 30,
    borderWidth:1,
    padding: 5,
    marginLeft: 10,
    fontSize: 18
   },
});
