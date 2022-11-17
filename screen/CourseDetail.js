import { Text, View } from "react-native";
import CourseList from "../courses/CourseList";
export default function CourseDetail({ navigation, route }) {
  const DetailId = route.params.courseId;

  const selectedCourse = CourseList.find(course => course.courseCover.some(item => item.Course === 'react'))
  console.log(selectedCourse)
  return (
    <View>
      <Text>Course Detail {DetailId}</Text>
    </View>
  );
}
