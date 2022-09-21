import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import { exploreNearbyData } from "../data/exploreNearby";
import { cardsData } from "../data/cards";

export default function Home({ exploreNearbyData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>AirBnB</title>
        <meta name="description" content="AirBnb" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      {/* Main sections */}
      <main className="max-w-7xl mx-auto px-8 sm:px-12">
        {/* Expolore nearby section */}
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
        
          {/* Pull data froms server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {exploreNearbyData?.map(item => (
              <SmallCard 
                img={item.img} 
                location={item.location} 
                distance={item.distance} 
                key={item.location} 
              />
            )) 
            }
          </div>
        </section>
        {/*  Live Anywhere section*/}
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(cardItem => (
              <MediumCard img={cardItem.img} title={cardItem.title} key={cardItem.title} />
            ))
            }
          </div>
        </section>

        {/* Large card section */}
        <section>
          <LargeCard 
            img="https://links.papareact.com/4cj"
            title="The Greatness Outdoor"
            description="Wishlists curated by AirBnb."
            buttonText="Get Inspired"
          />
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  //const exploreData = await fetch("https://links.papareact.com/pyp").then(res => console.log(res));
  console.log(cardsData);
  return {
    props: {
      exploreNearbyData, 
      cardsData
    }
  }
}
