import axios from "axios";

export function storeData(data) {
  axios.post(
    "https://react-native-01-9835f-default-rtdb.firebaseio.com/expences.json",
    data
  );
}

export async function fetchData() {
  console.log(responce);
  const responce = await axios.get(
    "https://react-native-01-9835f-default-rtdb.firebaseio.com/expences.json"
  );

  const fetchdata = [];
  for (const key in responce.data) {
    const Data = {
      id: key,
      username: responce.data[key].username,
      email: responce.data[key].email,
      password: responce.data[key].password,
      address: responce.data[key].address,
    };
    fetchdata.push(Data);
  }
  return fetchdata;
}
