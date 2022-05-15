import { TMDB_THUMBNAIL_BASE_URL } from "constants/constants"
import Image from "next/image"
import { Title } from "typings"

interface Props {
    title: Title
}

const Thumbnail: React.FC<Props> = ({ title }) => {
    return (
        <div
            className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-40
        md:min-w-[274px] md:hover:scale-105"
        >
            <Image
                src={`${TMDB_THUMBNAIL_BASE_URL}${title.backdrop_path || title.poster_path}`}
                className="rounded-sm object-cover md:rounded"
                layout="fill"
            />
        </div>
    )
}

export default Thumbnail
