import { useRef, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"
import Thumbnail from "components/Thumbnail"
import { Title } from "typings"

interface Props {
    title: string
    genreData: Title[]
}

const SlidingRow: React.FC<Props> = ({ title, genreData }) => {
    const [hasScrolled, setHasScrolled] = useState<boolean>(false)
    const rowRef = useRef<HTMLDivElement>(null)

    const handleClick = (direction: string) => {
        setHasScrolled(true)
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current
            const scrollDistance = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
            rowRef.current.scrollTo({ left: scrollDistance, behavior: "smooth" })
        }
    }

    return (
        <div className="h-40 space-y-0.5 md:space-y-2">
            <h2
                className="w-56 cursor-pointer text-sm font-semibold text-lightGray transition duration-200
                hover:text-white md:text-2xl"
            >
                {title}
            </h2>
            <div className="group relative md:-ml-2">
                <ChevronLeftIcon
                    className={`sliderBtn left-2 ${!hasScrolled && "hidden"}`}
                    onClick={() => handleClick("left")}
                />
                <div
                    ref={rowRef}
                    className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
                >
                    {genreData.map((movie) => (
                        <Thumbnail key={movie.id} title={movie} />
                    ))}
                </div>
                <ChevronRightIcon className="sliderBtn right-2" onClick={() => handleClick("right")} />
            </div>
        </div>
    )
}

export default SlidingRow
