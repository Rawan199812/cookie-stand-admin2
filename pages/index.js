
// // import {Head} from '../component/Head';
// // import {Header}  from '../component/Header';
// // import { hours } from './data'
// import { useState } from 'react'
// // import Head from 'next/head'

  
// // import { useState } from 'react'
// import { getToken } from '../services/cookiesAPI'
// import {LoginForm} from '../component/login-form'
// import {CookieStandAdmin} from '../component/cookie-stand-admin'

// export default function Home() {

//     const [token, setToken] = useState();

//     const [username, setUsername] = useState('');

//     async function loginHandler(values) {

//         const fetchedToken = await getToken(values);

//         setToken(fetchedToken);

//         setUsername(values.username);
//     }

//     function logoutHandler() {
//         setToken(null);
//     }

//     if (!token) return(
//         <div className="bg-green-50 min-h-screen">
//             <LoginForm onSubmit={ loginHandler } /> 
//         </div>
//     ) 

//     return <CookieStandAdmin token={ token } onLogout={ logoutHandler } username={ username } />
// }



import { useState } from 'react'
import Admin from '../component/cookie-stand-admin'
import Login from '../component/login-form'


export default function Home() {

  const [userName,setUserName] = useState('test')
  const [savedPassword,setsavedPassword] = useState('test')
  const [logged,setLogged] = useState(false)

  function change(username,password){
    if (userName == username && password == savedPassword){
      setLogged(true);
    }
  }

  return (
    <div className="bg-green-100">
      {logged ? <Admin username={userName} password={savedPassword}/> : <Login change={change}/>}
    </div>
  )

}
