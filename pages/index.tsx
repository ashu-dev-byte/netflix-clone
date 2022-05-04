import Head from 'next/head'
import Header from 'components/Header'
import Banner from 'components/Banner'
import { Movie } from 'typings'
import {
    getActionMovies,
    getComedyMovies,
    getDocumentaries,
    getHorrorMovies,
    getNetflixOriginals,
    getRomanceMovies,
    getTendingNow,
    getTopRated,
} from 'services/tmdbService'

interface Props {
    actionMovies: Movie[]
    comedyMovies: Movie[]
    documentaries: Movie[]
    horrorMovies: Movie[]
    netflixOriginals: Movie[]
    romanceMovies: Movie[]
    trendingNow: Movie[]
    topRated: Movie[]
}

const Home = ({
    actionMovies,
    comedyMovies,
    documentaries,
    horrorMovies,
    netflixOriginals,
    romanceMovies,
    trendingNow,
    topRated,
}: Props) => {
    return (
        <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-gradientBgColor lg:h-[140vh]">
            <Head>
                <title>Home - Netflix</title>
                <link
                    rel="icon"
                    href="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico"
                />
            </Head>

            <Header />

            <main>
                <Banner />

                <section></section>
            </main>
        </div>
    )
}

export default Home

export const getServerSideProps = async () => {
    return {
        props: {
            actionMovies: await getActionMovies(),
            comedyMovies: await getComedyMovies(),
            documentaries: await getDocumentaries(),
            horrorMovies: await getHorrorMovies(),
            netflixOriginals: await getNetflixOriginals(),
            romanceMovies: await getRomanceMovies(),
            trendingNow: await getTendingNow(),
            topRated: await getTopRated(),
        },
    }
}
