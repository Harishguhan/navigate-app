import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Input({label,placeholder}){
    return(
        <View>
            <Text>{label}</Text>
            <TextInput placeholder={placeholder} />
        </View>
    );
}