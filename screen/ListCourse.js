import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import CourseCard from "../components/CourseCard";
import CourseList from "../courses/CourseList";

export default function ListCourse({ navigation }) {

  function showCourseList(itemData) {
    function NextPage() {
        navigation.navigate("Course OverView",{
          courseId:itemData.item.id,
          courseTitle:itemData.item.courseTitle,
          duration:itemData.item.duration,
          cost:itemData.item.cost,
          courseCover:itemData.item.courseCover
        });
      }
      // console.log("courseCover in list",courseCover)
    return (
      <CourseCard
        title={itemData.item.courseTitle}
        duration={itemData.item.duration}
        onPress={NextPage}
      />
    );
  }
  return (
    <>
      <FlatList
        data={CourseList}
        keyExtractor={(item) => item.id}
        renderItem={showCourseList}
        numColumns={2}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  heading: {
    color: "red",
    fontWeight: "bold",
    fontSize: 50,
  },
});
