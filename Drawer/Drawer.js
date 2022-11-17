import { createDrawerNavigator } from '@react-navigation/drawer';
import CourseList from '../courses/CourseList';
const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="list" component={CourseList} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}