import '../utils/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NaviBar from '../components/Navibar';
import MyCard from '../components/Mycard'
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '../components/AppRouter';

import firebase from '../firebase';


function App() {

  var database = firebase.database();

  const dbRef = firebase.database().ref();
  dbRef.child("cards").get().then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
      console.error(error);
  });


  const ref = firebase.firestore().collection("cards");
  console.log(ref);



  return (
    <BrowserRouter>
      {/* <div className="App"> 
        <NaviBar/>
        <MyCard title="Хирург" desc="dsflkdsjfh" img="https://firebasestorage.googleapis.com/v0/b/it-cow.appspot.com/o/doctor_images%2Fsurgeon.jpg?alt=media&token=3cfaec61-5d38-4347-8a93-e0cfbd154571"/>
    </div> */}
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
