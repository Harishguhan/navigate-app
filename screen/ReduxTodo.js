import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addName,deleteName } from "../Store/CustomerName";
export default function ReduxTodo() {

  const [input, setInput] = useState({
    id:'',
    name:'',
  });
  const value = useSelector((state)=> state.names);

  const dispatch = useDispatch();

  const handleChange = (text) => {
    setInput({id:Math.floor(Math.random() * 10000),name:text})
  }
  const handleSubmit = () => {
    dispatch(addName(input));
    setInput('')
  }
  return (
    <>
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        placeholder="Add a new Name"
        value={input}
        onChangeText={handleChange}
      />
      <View style={styles.btn}>
      <Button title="Add Name" onPress={handleSubmit} />
      </View>
    </View>
    <View>
        {value.map((data) => {
            return(
                <View style={styles.box}>
                    <Text key={data.id} onPress={() => dispatch(deleteName(data.id))}>{data.name}</Text>
                </View>
            );
        })}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
    view:{
        margin:20,
    },  
   title: {
    marginTop:20,
    marginLeft: 20,
    fontSize: 30,
   },
   input: {
    borderWidth:1,
    borderColor:'black',
    padding:8,
    borderRadius:6,
   },
   btn:{
    marginTop:10,
   },
   box:{
    borderWidth:1,
    margin:20,
    padding:8,
    borderRadius:10,
    backgroundColor:'skyblue'
   }
});
