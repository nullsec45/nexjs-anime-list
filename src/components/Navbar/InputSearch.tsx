"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRef } from "react";
import { useRouter } from "next/navigation";

const InputSearch=() => {
    const searchRef=useRef<HTMLInputElement>(null);
    const router=useRouter();

    const handleSearch=(event:React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) => { 
        const keyword = searchRef.current?.value;

        if (keyword) {
            if (event.type === "click" || (event.type === "keydown" && (event as React.KeyboardEvent).key === "Enter")) {
                event.preventDefault();
                router.push(`/search/${keyword}`);
            }
        }

    }

    return (
        <div className="relative">
            <input type="text"  placeholder="Cari Anime..."  ref={searchRef} onKeyDown={handleSearch} className="w-full p-2 rounded"/>
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch;