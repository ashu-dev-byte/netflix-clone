import { useEffect, useState } from "react"
import Image from "next/image"
import { Title } from "typings"
import { HomeProps } from "pages/index"
import { getRandomTitleFromAllGenres } from "utils"
import { TMDB_IMAGE_BASE_URL as url } from "constants/constants"
import { InformationCircleIcon } from "@heroicons/react/outline"
import { FaPlay } from "react-icons/fa"

interface Props {
    allGenreData: HomeProps
}

const Banner: React.FC<Props> = ({ allGenreData }) => {
    const [title, setTitle] = useState<Title | null>(null)
    const overview = title?.overview

    useEffect(() => {
        setTitle(getRandomTitleFromAllGenres(allGenreData))
    }, [])

    return (
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 md:py-24 lg:h-[70vh] lg:justify-end lg:pb-12">
            <div className="absolute top-0 left-0 -z-10 h-[95vh] w-[100%]">
                <Image
                    src={`${url}${title?.backdrop_path || title?.poster_path}`}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <h1 className="text-2xl font-bold md:max-w-[70vw] md:text-4xl lg:text-5xl">
                {title?.title || title?.name || title?.original_name}
            </h1>
            <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
                {overview && overview.length < 320 ? overview : `${overview?.substring(0, 320)}...`}
            </p>
            <div className="flex space-x-3">
                <button className="bannerBtn bg-white text-black">
                    <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
                    Play
                </button>
                <button className="bannerBtn bg-[gray]/70">
                    <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /> More Info
                </button>
            </div>
        </div>
    )
}

export default Banner
