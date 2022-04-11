
import React,{ useEffect } from 'react';
import firebase from './firebase';



function App() {

  const[token, setToken] = React.useState('');
  
useEffect(()=>{
  
  const messaging = firebase.messaging();
  messaging.requestPermission()
  .then((token) =>{
      return messaging.getToken();
  }).then(token =>{
    setToken(token);
    console.log('token : ' + token);
  }).catch(err =>{
    console.log(err)
  })
})

  console.log(token)




  return (
    <div className="App">
        <h1>manda notificaiones por favor</h1>
    </div>
  );
}

export default App;
