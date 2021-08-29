import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({ exploreData, cardData }) {
  // console.log('Dataa: ', exploreData);
  console.log('Card Dataa: ', cardData);
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/airbnb-logo.png" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-5xl mx-auto px-7 sm:px-16">
          <h2 className="text-3xl font-bold mt-5">Explore Nearly</h2>
        <section className="pt-6">

          {/* pull data from server from - API endpoints */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            exploreData?.map((item) => (
              <SmallCard 
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))
          }
          </div>
        </section>
        <section>
          <h2 className="text-3xl font-bold py-8">Live Anywhere</h2>

          <div className="flex space-x-3 p-4 hide-sb">
            {cardData?.map((item) =>(
            <MediumCard
              key={item.img}
              img={item.img}
              title={item.title}
            />
          ))}
          </div>
        </section>

        <LargeCard 
          img='https://links.papareact.com/4cj'
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp')
  .then((res) => res.json());

  const cardData = await fetch('https://links.papareact.com/zp1')
  .then((res) => res.json());

  return {
    props: {
      exploreData,
      cardData
    }
  }

}