import React from 'react'
import { useState } from 'react'


// import ReactJson from 'react-json-view'
 
export const Main = () => {
    const [location,setLocation] = useState();
    const [max,setMax] = useState();
    const [min,setMin] = useState();
    const [avgCookie,setAvgCookie] = useState();
    function CookeiHandler(e){
        e.preventDefault();
        setLocation(e.target.location.value);
        setMin(e.target.min.value);
        setMax(e.target.max.value);
        setAvgCookie(e.target.avgCookie.value);
      }
    const json = {
        "location": location,
        "minCustomers": min,
        'maxCustomers': max,
        'avgCookies': avgCookie,
    }
    const data = JSON.stringify(json)
    return (

      
            <form onSubmit = {(e)=>CookeiHandler(e)} className="bg-green-200">
                <fieldset>
                <label >
                    Create Cookie Stand
                </label>
                    <div>
                            
                        <div>
                            <div >
                                <label >location</label>
                                <input type="text" name="location"  id = "location"/>
                            </div>
                        </div>
                        <div >
                            <div >
                                <div>
                                    <label >Minimum Customers per Hour</label>
                                    <input type="number" name = "min" id = "min"/>
                                </div>
                                <div >
                                    <label >Maximum Customers per Hour</label>
                                    <input type="number"  name = "max" id = "max"/>
                                </div>
                                <div >
                                    <label >Average Cookies per Sale</label>
                                    <input type="number" name = "avgCookie" id = "avgCookie" />
                                </div>
                                <button className="bg-green-600 w-1/4">Create</button>
                            </div>
                            <p>Report Table Coming Soon...</p>
                            <p>{data}</p>
                        </div>
                    </div>
                </fieldset>
            </form>
            
      
    )
}