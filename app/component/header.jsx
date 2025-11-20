import Link from "next/link"

const RootHeader = ()=>{
 return <div>
    <div className="flex p-20 justify-between items-center">
        <h1>Marco Alpajaro</h1>
        <nav>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    </div>
 </div>
}
export default RootHeader;