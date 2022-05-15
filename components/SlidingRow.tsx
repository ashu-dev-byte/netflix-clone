import { useRef, useState } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"
import Thumbnail from "components/Thumbnail"
import { Title } from "typings"

interface Props {
    title: string
    genreData: Title[]
}

const SlidingRow: React.FC<Props> = ({ title, genreData }) => {
    const [scrolledDistance, setScrolledDistance] = useState<number | undefined>(0)
    const rowRef = useRef<HTMLDivElement>(null)

    const handleClick = (direction: string) => {
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current
            const updatedPosition =
                direction === "left" ? scrollLeft - clientWidth * 0.6 : scrollLeft + clientWidth * 0.6
            setScrolledDistance(updatedPosition)
            rowRef.current.scrollTo({ left: updatedPosition, behavior: "smooth" })
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
                    className={`sliderBtn left-2 ${!scrolledDistance && "hidden"}`}
                    onClick={() => handleClick("left")}
                />
                <div
                    className="flex items-center space-x-0.5 overflow-x-scroll scrollbar-hide md:space-x-2.5 md:p-2"
                    ref={rowRef}
                    onScroll={() => setScrolledDistance(rowRef.current?.scrollLeft)}
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
