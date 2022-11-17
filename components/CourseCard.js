import { Pressable, StyleSheet, Text, View } from "react-native";

function CourseCard({title,duration,onPress}) {
  return (
    <View style={styles.card}>
      <Pressable onPress={onPress}>
        <Text style={styles.courTitle}>Course:{title}</Text>
      </Pressable>
    </View>
  );
}

export default CourseCard;

const styles = StyleSheet.create({
    card:{
        flex:1,
        height:150,
        margin:16,  
        elevation:4,
        padding:20,
        borderRadius:10,
        backgroundColor:"skyblue"
    },
    courTitle:{
        marginTop:16,
        textAlign:"center",
        fontSize:17,
        fontWeight:"bold",
    },
    subTitle:{
        marginTop:20,
        textAlign:'center',

    }

});
