import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NaviBar from './Navibar';
import MyCard from './Mycard';

import firebase from 'firebase';


function App() {

  var database = firebase.database();

  const dbRef = firebase.database().ref();
  dbRef.child("users").child(userId).get().then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
      console.error(error);
  });
  console.log("a");

  return (
    <div className="App"> 
      <NaviBar/>
      <MyCard></MyCard>

    </div>
    
  );
}

export default App;
