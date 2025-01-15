import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar=() => {
    return (
       <header className="bg-indigo-500">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 bg-color-accent">
                <Link href='/' className="font-bold text-white text-2xl">AnimeList</Link>
                <InputSearch />
            </div>
       </header>
    )
}

export default Navbar;