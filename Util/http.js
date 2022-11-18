import axios from "axios";

function StoreData(data){
    axios.post('https://react-native-01-9835f-default-rtdb.firebaseio.com/expences.json')
}