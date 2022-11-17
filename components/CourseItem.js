import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function CourseItem({ id,title, imageUrl, Auther, Language, navigation }) {
  function detilScreen() {
    navigation.navigate("courseDetail",{
      courseId:id
    });
  }
  return (
    <View style={styles.courseItems}>
      <Pressable>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.headingText}>{title}</Text>
        <View style={styles.content}>
          <Text style={styles.text}>Created By:{Auther}</Text>
          <Text style={styles.text1}>Language:{Language}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CourseItem;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    // resizeMode: 'contain'
  },
  headingText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
  courseItems: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: "white",
    padding: 15,
    elevation: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text1: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  text1: {
    margin: 4,
  },
});
