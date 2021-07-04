
// export const Table = (props) => {
//     return (
//       <table className="w-1/2 mx-auto my-4">
//         <thead>
//           <tr>
//             <th className="border-green-700">No.</th>
//             <th className="border-green-700">Question</th>
//             <th className="border-green-700">Reponse</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="">1</td>
//             <td className="">2</td>
//             <td className="">3</td>
//           </tr>
//         </tbody>
//       </table>
//     );
//   }




// function ReportTable(props) {

//     if (stands.length > 0) {

//       const col_totals = hours.map((hour, idx) => (
//         props.arrayCookieStands.reduce((total, stand) => total + stand.hourly_sales[idx], 0))
//       )
      
//       return(
//         <div className="mb-10 text-center">
//           <table className="w-9/12 m-auto">
//             <thead>
//               <tr className="bg-green-500">
//                 <th className="px-4 center">Location</th>
//                 {hours.map(hour => (<th className="text-sm">{hour}</th>))}
//                 <th className="px-4 center">Total</th>
//               </tr>
//             </thead>
//             <tbody className="bg-green-300">
//               {props.arrayCookieStands.map(stand => (
//                 <tr className="odd:bg-green-400">
//                   <td className="border border-gray-400">{stand.location}</td>
//                   {stand.hourly_sales.map(total => (<td className="border border-gray-400">{total}</td>))}
//                   <td className="border border-gray-400">{stand.hourly_sales.reduce((x, y) => x + y, 0)}</td>
//                 </tr>
//               ))}
//             </tbody>
//             <tfoot className="bg-green-500">
//               <tr className="font-bold">
//                 <th>Totals</th>
//                 {col_totals.map(total => (<th>{total}</th>))}
//                 {col_totals.reduce((x, y) => x + y, 0)}
//               </tr>
//             </tfoot>
//           </table>
//         </div>
//     )
//   }
//     else {
//       return(
//         <h2>No Cookie Stands Available</h2>
//       )
//     }
//   }

import { hours } from '../pages/data'

export function CookieStandTable({ stands, onDelete }) {
      
    return (
        <Table>
            <thead>
                <tr className="bg-green-400">
                    <TH>Location</TH>
                    {hours.map(slot => (
                        <TH key={slot}>{slot}</TH>
                    ))}
                    <TH>Totals</TH>
                </tr>
            </thead>
            <tbody>
                {stands.map((stand, i) => {
                    return (
                        <tr className="text-right border-2 border-green-500 even:bg-green-300 odd:bg-green-200" key={stand.id}>
                            <TH>
                                <div>
                                    <p className="float-left pl-3">{stand.location}</p>
                                    <img src="/red-trash.png" className="float-right pr-2 mt-0.5" onClick={() => onDelete(stand)} width="25" height="25"/>
                                </div>
                            </TH>
                            {stand.cookiesEachHour.map((amt, i) => (
                                <TD key={i}>
                                    {amt}
                                </TD>
                            ))}
                            <TD>{stand.totalDailyCookies}</TD>
                        </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr className="bg-green-400 text-right">
                    <TH>Totals</TH>
                    {hours.map((_, i) => {
                        const amt = stands.reduce((acc, cur) => acc + cur.cookiesEachHour[i], 0);
                        return <TD key={'amt' + i}>{amt}</TD>
                    })}
                    <TD>{stands.reduce((acc, cur) => acc + cur.totalDailyCookies, 0)}</TD>
                </tr>
            </tfoot>
        </Table>

    );
}

function Table({ children }) {
    return (
        <table className="w-full border-green-500 m-6 mx-auto text-sm border-2">
            {children}
        </table>
    );
}

function TH({ children }) {
    return (
        <th className="border-green-500 p-2 text-left border-2">{children}</th>
    )
}

function TD({ children }) {
    return (
        <td className="border-green-500 p-2 border-2">{children}</td>
    )
}