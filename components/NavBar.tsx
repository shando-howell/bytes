import Link from "next/link"

const NavBar = () => {
  return (
    <div className="bg-blue-500 text-white p-2">
        <header className="flex p-2">
            <Link href="/" className="flex-1 uppercase tracking-widest">Bytes</Link>
            <div className="flex">
              <Link href="/admin" className="px-2">Admin Dashboard</Link>
              <h2 className="text-white">{new Date().toLocaleDateString()}</h2>
            </div>
        </header>
    </div>
  )
}

export default NavBar