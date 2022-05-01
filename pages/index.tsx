import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from 'components/Header'

const Home: NextPage = () => {
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
                <section></section>
            </main>
        </div>
    )
}

export default Home
