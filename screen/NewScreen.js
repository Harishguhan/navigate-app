import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListCourse from "./ListCourse";
import Todo from "./Todo";
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import SignupForm from "../Forms/SignUpForm";
import { FontAwesome } from '@expo/vector-icons'; 
import ReduxTodo from "./ReduxTodo";
import Dashboard from "./Dashhboard";

function NewScreen() {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="courseList"
        component={ListCourse}
        options={{
            headerShown:false,
            title:'Home',
            tabBarIcon: ({color,size}) => ( <Entypo name="home" size={size} color={color} /> )
        }}
      />
      <BottomTab.Screen
        name="dashbord"
        component={Dashboard}
        options={{
            headerShown:false,
            title:'Logout',
            tabBarIcon:({color,size}) => (<SimpleLineIcons name="logout" size={size} color={color} />) 
        }}
      />
      <BottomTab.Screen
        name="Todo"
        component={ReduxTodo}
        options={{
            headerShown:false,
            title:'ReduxTodo',
            tabBarIcon:({color,size}) => (<AntDesign name="forward" size={size} color={color} />) 
        }}
      />
      <BottomTab.Screen
        name="SignupForm"
        component={SignupForm}
        options={{
            headerShown:false,
            title:'SignupForm',
            tabBarIcon:({color,size}) => (<FontAwesome name="wpforms" size={size} color={color}  />) 
        }}
      />
    </BottomTab.Navigator>
  );
}

export default NewScreen;
