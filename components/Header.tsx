import { useEffect, useState } from "react"
import Link from "next/link"
import { BellIcon, SearchIcon } from "@heroicons/react/solid"

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className={`${isScrolled && "bg-backgroundColor"}`}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                    alt="Netflix Logo"
                    width="100px"
                    height="100px"
                    className="cursor-pointer object-contain"
                />
                <ul className="hidden space-x-4 md:flex">
                    <li className="navItem">Home</li>
                    <li className="navItem">TV Shows</li>
                    <li className="navItem">Movies</li>
                    <li className="navItem">New & Popular</li>
                    <li className="navItem">My List</li>
                </ul>
            </div>
            <div className="flex items-center justify-center space-x-4">
                <SearchIcon className="hidden h-6 w-6 sm:inline"></SearchIcon>
                <BellIcon className="h-6 w-6"></BellIcon>
                <Link href="/account">
                    <img src="http://rb.gy/g1pwyx" alt="Profile Avatar" className="cursor-pointer rounded" />
                </Link>
            </div>
        </header>
    )
}

export default Header
