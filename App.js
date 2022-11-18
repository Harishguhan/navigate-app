import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ListCourse from "./screen/ListCourse";
import CourseOverView from "./screen/CourseOverView";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import MyDrawer from "./Drawer/Drawer";r
import NewScreen from "./screen/NewScreen";
import CourseDetail from "./screen/CourseDetail";
import { Provider } from "react-redux";
import { Store } from "./Store/Store";

import Dashboard from "./screen/Dashhboard";
// import ContextProvider from "./Context/Context";
const Stack = createNativeStackNavigator();

// const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <ContextProvider> */}
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "grey" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "white" },
            }}
          >
            <Stack.Screen
              name="Course List"
              component={NewScreen}
              options={{
                title: "All Courses",
              }}
            />
            <Stack.Screen
              name="Course OverView"
              component={CourseOverView}
              options={{
                title: "Recomended Course",
              }}
            />
            <Stack.Screen
              name="courseDetail"
              component={CourseDetail}
              options={{
                title: "Course Detail",
              }}
            />
            <Stack.Screen
              name="dashboard"
              component={Dashboard}
            />
          </Stack.Navigator>
        </NavigationContainer>
       
      {/* </ContextProvider> */}
       </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
