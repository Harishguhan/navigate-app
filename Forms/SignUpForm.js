import { View } from "react-native";
import Input from "../components/Input";

export default function SignupForm(){
    return(
        <View>
            <Input label="Username" placeholder="Enter Your name"/>
            <Input label="Email" placeholder="Enter Your Email"/>
            <Input label="Password" placeholder="Enter Your password"/>
            <Input label="Address" placeholder="Enter Your Address"/>
        </View>
    );
}