import { useEffect } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import CourseItem from "../components/CourseItem";

export default function CourseOverView({ route,navigation }) {
  const courseId = route.params.courseId;
  const courseTitle = route.params.courseTitle;
  const duration = route.params.duration;
  const cost = route.params.cost;
  const courseCover = route.params.courseCover;


  // setting the top header //
  
    useEffect(() => {
        navigation.setOptions(({
            title:courseTitle
        }))
    },[courseTitle])

  function renderCourseItem(itemData) {
    return (
      <CourseItem
        id={itemData.item.courseId}
        title={itemData.item.Course}
        imageUrl={itemData.item.imageUrl}
        Auther={itemData.item.Auther}
        Language={itemData.item.Language}
        navigation={navigation}
      />
    );
  }
  return (
    <View>
      <FlatList
        data={courseCover}
        keyExtractor={(item) => item.courseId}
        renderItem={renderCourseItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  heading: {
    color: "green",
  },
});
