// import Link from 'next/link'

// export default function Overview(){
//     return(
//         <div>
//             <h1>Overview Page</h1>
//             <Link href="/">
//                 <a>Back To Home</a>
//             </Link>
//         </div>
//     )
// }
import Head from '../component/Head'
import Header from '../component/Header'
import { useState } from 'react'

export default function Overview() {
    const [title,setTitle] = useState('Overview');
    const [path,setPath] = useState("/")
    const [page,setPage] = useState("Cookie Stand Admin")

    return (
        <div className="bg-green-100">
          <Head title={title}/>
          <Header header={title} path={path} page={page}/>
        </div>
      )
}