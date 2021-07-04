import {Head} from '../component/Head';
import {Header}  from '../component/Header';

import { hours } from './data'
import { useState } from 'react'




export default function Home() {
  const hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]
  const [stands, setStands] = useState([])

  function onCreate(e){
    e.preventDefault()
    const totalHours = hours.map(hour => hour)
    const newStands = {
      location: e.target.location.value,
      setMin: e.target.min.value,
      setMax: e.target.max.value, 
      setAvgCookie: e.target.avgCookie.value,
      hourly_sales: hourly_sales,
      length: stands.length
    }
    setStands([...stands, newStands])
  }
  return (
   
      <>
        <Head />
        <Header title="Cookie Stand Admin"/>
        <Main />
        <div className="text-gray-500 my-10 text-center">
          <ReportTable arrayCookieStands={stands}/>
        </div>
        <Footer />
        
      </>

  )
  function Footer (props){
    return (
        <div>
            <footer className="bg-green-500">&copy;2021</footer>
            <p>{stands.length} Locations World Wide</p> 
            
        </div>
    )
}
   
function Main (){

  return (
    
   <form onSubmit = {(e)=>onCreate(e)} className="bg-green-200">
          <div className="flex-1">
               <fieldset>
               <div className="text-center">

                  <label >
                      Create Cookie Stand
                  </label>
               </div>
                          <div >
                              <label className="text-sm w-1/6" >location</label>
                              <input type="text" name="location"  id = "location" className="w-5/6 mb-4"/>
                          </div>
                      
                          <div  className="grid grid-flow-col grid-cols-4 gap-4">
                                  <div className="flex-1 bg-green-200 rounded-md p-3">
                                      <label className="text-sm" >Minimum Customers per Hour</label>
                                      <input type="number" name = "min" id = "min"  className="w-full p-0.5"/>
                                  </div>
                              <div  className="flex-1 bg-green-200 rounded-md p-3">
                                  <label className="text-sm">Maximum Customers per Hour</label>
                                  <input  className="w-full p-0.5" type="number"  name = "max" id = "max"/>
                              </div>
                              <div className="flex-1 bg-green-200 rounded-md p-3" >
                                  <label  className="text-sm">Average Cookies per Sale</label>
                                  <input className="w-full p-0.5" type="number" name = "avgCookie" id = "avgCookie" />
                              </div>
                              <div className="flex-1">
                                   <button className="text-sm px-16 py-4 m-4 bg-green-600 text-black-50">Create</button>
                              </div>
                          </div>
                          <p>Report Table Coming Soon...</p>
                          {/* <p>{data}</p> */}
                     
                 
              </fieldset>
              </div>
       </form>
          
    
  )
}

function ReportTable(props) {

  if (stands.length > 0) {

    const col_totals = hours.map((hour, idx) => (
      props.arrayCookieStands.reduce((total, stand) => total + stand.hourly_sales[idx], 0))
    )
    
    return(
      <div className="mb-10 text-center">
        <table className="w-9/12 m-auto">
          <thead>
            <tr className="bg-green-500">
              <th className="px-4 center">Location</th>
              {hours.map(hour => (<th className="text-sm">{hour}</th>))}
              <th className="px-4 center">Total</th>
            </tr>
          </thead>
          <tbody className="bg-green-300">
            {props.arrayCookieStands.map(stand => (
              <tr className="odd:bg-green-400">
                <td className="border border-gray-400">{stand.location}</td>
                {stand.hourly_sales.map(total => (<td className="border border-gray-400">{total}</td>))}
                <td className="border border-gray-400">{stand.hourly_sales.reduce((x, y) => x + y, 0)}</td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-green-500">
            <tr className="font-bold">
              <th>Totals</th>
              {col_totals.map(total => (<th>{total}</th>))}
              {col_totals.reduce((x, y) => x + y, 0)}
            </tr>
          </tfoot>
        </table>
      </div>
  )
}
  else {
    return(
      <h2>No Cookie Stands Available</h2>
    )
  }
}

}



