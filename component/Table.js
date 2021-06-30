
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