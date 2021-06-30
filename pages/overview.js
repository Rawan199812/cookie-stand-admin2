import Link from 'next/link'

export default function Overview(){
    return(
        <div>
            <h1>Overview Page</h1>
            <Link href="/">
                <a>Back To Home</a>
            </Link>
        </div>
    )
}