import { StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Input({label,textInputConfig,erors}){
    return(
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} {...textInputConfig} />
            <Text style={{color:'red'}}>{erors}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer:{
        marginHorizontal:8,
        marginVertical:16,
    },
    label:{
        fontSize:12,
        marginBottom:10,
    },
    input:{
        backgroundColor:'white',
        padding:8,
        fontSize:18,
        borderRadius:8
    }

});