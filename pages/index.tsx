import Head from "next/head"
import Header from "components/Header"
import Banner from "components/Banner"
import SlidingRow from "components/SlidingRow"
import { Title } from "typings"
import {
    getActionTitles,
    getComedyTitles,
    getDocumentaries,
    getHorrorTitles,
    getNetflixOriginals,
    getRomanceTitles,
    getTendingNow,
    getTopRated,
} from "services/tmdbService"

export interface HomeProps {
    actionTitles: Title[]
    comedyTitles: Title[]
    documentaries: Title[]
    horrorTitles: Title[]
    netflixOriginals: Title[]
    romanceTitles: Title[]
    trendingNow: Title[]
    topRated: Title[]
}

const Home = (props: HomeProps) => {
    return (
        <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-gradientBgColor lg:h-[140vh]">
            <Head>
                <title>Home - Netflix</title>
                <link rel="icon" href="https://assets.nflxext.com/ffe/siteui/common/icons/nficon2016.ico" />
            </Head>
            <Header />
            <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
                <Banner allGenreData={props} />
                <section className="md:space-y-24">
                    <SlidingRow title="Trending Now" genreData={props.trendingNow} />
                    <SlidingRow title="Netflix Originals" genreData={props.netflixOriginals} />
                    <SlidingRow title="Top Rated" genreData={props.topRated} />
                    <SlidingRow title="Action Thrillers" genreData={props.actionTitles} />
                    <SlidingRow title="Comedies" genreData={props.comedyTitles} />
                    <SlidingRow title="Horror" genreData={props.horrorTitles} />
                    <SlidingRow title="Romance" genreData={props.romanceTitles} />
                    <SlidingRow title="Documentaries" genreData={props.documentaries} />
                </section>
            </main>
            {/* <InfoModal/> */}
        </div>
    )
}

export default Home

export const getServerSideProps = async () => {
    return {
        props: {
            actionTitles: await getActionTitles(),
            comedyTitles: await getComedyTitles(),
            documentaries: await getDocumentaries(),
            horrorTitles: await getHorrorTitles(),
            netflixOriginals: await getNetflixOriginals(),
            romanceTitles: await getRomanceTitles(),
            trendingNow: await getTendingNow(),
            topRated: await getTopRated(),
        },
    }
}
