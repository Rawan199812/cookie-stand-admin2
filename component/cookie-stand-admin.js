// import { useState, useEffect } from 'react'
// import useSWR from 'swr'
// import { CookieStand, fetchWithToken, postWithToken, deleteWithToken, apiUrl } from '../services/cookiesAPI'
// import Head from 'next/head'
// // import {Head} from './Head';
// import {Header}  from './Header';


// export function CookieStandAdmin({ token, onLogout, username }) {

//     const { data, error, mutate } = useSWR([apiUrl, token], fetchWithToken);

//     const [cookieStands, setCookieStands] = useState([]);

//     useEffect(() => {
//         if (!data) return;
//         setCookieStands(data);
//     }, [data])

//     if (error) return <h2>Ruh Roh</h2>
//     if (!data) return <h2>Loading...</h2>

//     async function createHandler(values) {

//         const newStand = CookieStand.fromValues(values);

//         newStand.location += '...'; // Add the ... to show loading state

//         const updatedStands = [newStand, ...cookieStands]

//         mutate(updatedStands, false);

//         await postWithToken(token, values);

//         mutate();

//     }

//     async function deleteHandler(stand) {

//         const updatedStands = cookieStands.filter(storedStand => storedStand.id !== stand.id);

//         mutate(updatedStands, false);

//         await deleteWithToken(stand.id, token);

//         mutate(async stands => {
//             return stands.filter(candidate => candidate.id !== stand.id);
//         });
//     }

//     return (
//         <div>
//             <Head>
//                 <title>Cookie Stand Admin</title>
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>

//             <Header/>

//             <main>
//             <form onSubmit = {(e)=>onCreate(e)} className="bg-green-200">
//           <div className="flex-1">
//                <fieldset>
//                <div className="text-center">

//                   <label >
//                       Create Cookie Stand
//                   </label>
//                </div>
//                           <div >
//                               <label className="text-sm w-1/6" >location</label>
//                               <input type="text" name="location"  id = "location" className="w-5/6 mb-4"/>
//                           </div>
                      
//                           <div  className="grid grid-flow-col grid-cols-4 gap-4">
//                                   <div className="flex-1 bg-green-200 rounded-md p-3">
//                                       <label className="text-sm" >Minimum Customers per Hour</label>
//                                       <input type="number" name = "min" id = "min"  className="w-full p-0.5"/>
//                                   </div>
//                               <div  className="flex-1 bg-green-200 rounded-md p-3">
//                                   <label className="text-sm">Maximum Customers per Hour</label>
//                                   <input  className="w-full p-0.5" type="number"  name = "max" id = "max"/>
//                               </div>
//                               <div className="flex-1 bg-green-200 rounded-md p-3" >
//                                   <label  className="text-sm">Average Cookies per Sale</label>
//                                   <input className="w-full p-0.5" type="number" name = "avgCookie" id = "avgCookie" />
//                               </div>
//                               <div className="flex-1">
//                                    <button className="text-sm px-16 py-4 m-4 bg-green-600 text-black-50">Create</button>
//                               </div>
//                           </div>
//                           <p>Report Table Coming Soon...</p>
//                           {/* <p>{data}</p> */}
                     
                 
//               </fieldset>
//               </div>
//        </form>
          
    
   
                
//                 <h2>Cookie Stand Table goes here</h2>
//             </main>

//             <h2>Cookie Stand Footer goes here</h2>
//         </div>
//     )
// }

import { useState, useEffect } from 'react'
import useSWR from 'swr'
import { CookieStand, fetchWithToken, postWithToken, deleteWithToken, apiUrl } from '../services/cookiesAPI'
import Head from 'next/head'
import Header from './Header'
import CookieStandTable from './Table'
import CookieStandForm from './form'

import Footer from './Footer'

export function CookieStandAdmin({ token, onLogout, username }) {

    const { data, error, mutate } = useSWR([apiUrl, token], fetchWithToken);

    const [cookieStands, setCookieStands] = useState([]);

    useEffect(() => {
        if (!data) return;
        setCookieStands(data);
    }, [data])

    if (error) return <h2>{error}</h2>
    if (!data) return <h2>Loading...</h2>

    async function createHandler(values) {

        const newStand = CookieStand.fromValues(values);

        newStand.location += '...'; // Add the ... to show loading state

        const updatedStands = [newStand, ...cookieStands]

        mutate(updatedStands, false);

        await postWithToken(token, values);

        mutate();

    }

    async function deleteHandler(stand) {

        const updatedStands = cookieStands.filter(storedStand => storedStand.id !== stand.id);

        mutate(updatedStands, false);

        await deleteWithToken(stand.id, token);

        mutate(async stands => {
            return stands.filter(candidate => candidate.id !== stand.id);
        });
    }

    return (
        <div className="flex flex-col h-screen">
            {/* <Head>
                <title>Cookie Stand Admin</title>
            </Head> */}

            <Header username={username} onLogout={onLogout} />

            <main className="flex-1 mx-auto w-10/12">
            <Form onCreate={ createHandler } />
            <Table stands={ cookieStands } onDelete={ deleteHandler } />
            </main>

            <Footer reports={ cookieStands } />
        </div>
    )
    }