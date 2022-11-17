import { useState } from "react";
import { Button, View } from "react-native";
import Input from "../components/Input";

export default function SignupForm() {
  const [inputValues, setInputvalues] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });
  const handleChange = (inputidentifier, enteredText) => {
    setInputvalues((currentInput) => {
      return {
        ...currentInput,
        [inputidentifier]: enteredText,
      };
    });
  };
  const handleSubmit = () => {
    console.log(inputValues);
  }
  return (
    <View>
      <Input
        label="Username"
        textInputConfig={{
          placeholder: "Enter your name",
          onChangeText: handleChange.bind(this, "username"),
          value:inputValues.username
        }}
        
      />
      <Input
        label="Email"
        textInputConfig={{
          placeholder: "Enter your Email",
          onChangeText: handleChange.bind(this, "email"),
          value:inputValues.email
        }}
      />
      <Input
        label="Password"
        textInputConfig={{
          placeholder: "Enter your Password",
          onChangeText: handleChange.bind(this, "password"),
          value:inputValues.password
        }}
      />
      <Input
        label="Address"
        textInputConfig={{
          placeholder: "Enter your Address",
          onChangeText: handleChange.bind(this, "address"),
          value:inputValues.address
        }}
      />
      <Button title="Submit" onPress={handleSubmit} /> 
    </View>
  );
}
