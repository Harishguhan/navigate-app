import { useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Input from "../components/Input";

export default function SignupForm() {
  const [inputValues, setInputvalues] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const [erors, setErrors] = useState({
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
    if (!enteredText) {
      setErrors({
        ...erors,
        [inputidentifier]: `${inputidentifier} cannot be blank`,
      });
    } else {
      setErrors({ ...erors, [inputidentifier]: "" });
    }
  };
  const handleSubmit = () => {
    if (!inputValues.username) {
      setErrors({ ...erors, username: "username is required" });
    } else if (!inputValues.email) {
      setErrors({ ...erors, email: "Email is required" });
    } else if (!inputValues.password) {
      setErrors({ ...erors, password: "passsword is required" });
    } else if (!inputValues.address) {
      setErrors({ ...erors, address: "Address is required" });
    } else {
      console.log("success");
    }
  };

  return (
    <View style={styles.formContainer}>
      <Input
        label="Username"
        textInputConfig={{
          placeholder: "Enter your name",
          onChangeText: handleChange.bind(this, "username"),
          value: inputValues.username,
        }}
        erors={erors.username}
      />
      <Input
        label="Email"
        textInputConfig={{
          placeholder: "Enter your Email",
          onChangeText: handleChange.bind(this, "email"),
          value: inputValues.email,
        }}
        erors={erors.email}
      />
      <Input
        label="Password"
        textInputConfig={{
          placeholder: "Enter your Password",
          onChangeText: handleChange.bind(this, "password"),
          value: inputValues.password,
        }}
        erors={erors.password}
      />
      <Input
        label="Address"
        textInputConfig={{
          placeholder: "Enter your Address",
          onChangeText: handleChange.bind(this, "address"),
          value: inputValues.address,
        }}
        erors={erors.address}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer:{
    margin:10
  }
});
