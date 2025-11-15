import Link from "next/link"
import AuthButtons from "./AuthButtons"

const NavBar = () => {
  return (
    <div className="bg-blue-500 text-white p-2">
        <header className="flex p-2">
            <Link href="/" className="flex-1 uppercase tracking-widest">Bytes</Link>
            <div className="flex">
              <AuthButtons />
            </div>
        </header>
    </div>
  )
}

export default NavBar