import { useState } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Input from "../components/Input";
import {storeData} from "../Util/http";

export default function SignupForm({ navigation }) {
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
    const emailRegex = new RegExp(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!inputValues.username) {
      setErrors({ ...erors, username: "username is required" });
    } else if (!inputValues.email) {
      setErrors({ ...erors, email: "Email is required" });
    } else if (!inputValues.email.match(emailRegex)) {
      setErrors({ ...erors, email: "Email is invalid" });
    } else if (!inputValues.password) {
      setErrors({ ...erors, password: "passsword is required" });
    }else if(inputValues.password.length < 8){
      setErrors({ ...erors, password: "passsword Must be 8 charecters" });
    }
     else if (!inputValues.address) {
      setErrors({ ...erors, address: "Address is required" });
    } else {
      storeData(inputValues);
      setInputvalues('');
      navigation.navigate("dashboard");
    }
  };

  return (
    <View style={styles.formContainer}>
      <KeyboardAvoidingView>
        <ScrollView>
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
            secureText={true}
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
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    margin: 10,
  },
});
