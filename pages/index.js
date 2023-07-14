import Head from 'next/head';
import Header from '/components/Header';
import Hero from '/components/Hero';
import Features from '/components/Features';
import Testimonials from '/components/Testimonials';
import Footer from '/components/Footer';
import '/styles/global.css';
import 'public/images/Maktub-primary_logo.png';


export default function Home({ data }) {
    const{ featuresData, testimonialsData }= data; 

  return (
    <div>
      <Head>
        <title>Far far away, behind the word mountains-Siddhartha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="container">
          <div className="hero-and-features">
            <Hero />
            <Features data={featuresData} />
          </div>
          <Testimonials data={testimonialsData} />
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero-and-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 40px;
          align-items: center;
          margin-bottom: 40px;
        }

        @media (max-width: 768px) {
          .hero-and-features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}



export async function getStaticProps() {
    // Fetch the required data from an API or any data source
    const featuresData = [
      { id: 1, title: 'Recent Posts', description: 'The spectacle before us was indeed sublime and Music Improvisation is spontaneous music' },
      { id: 2, title: 'Social', description: '<a href="#" className="index-btn1">Facebook</a>   <a href="#" className="hero-btn2">Instagram</a>   <a href="#" className="hero-btn3">Twitter</a>   <a href="#" className="hero-btn4">Whatsapp</a>' },
      { id: 3, title: 'Tag cloud', description: '#music #travel #lifestyle' },
    ];
  
    const testimonialsData = [
      { id: 1, name: 'John Doe', content: 'Hello! My name is Jonathan Doe working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.' },
      { id: 2, name: 'Jane Smith', content: 'There is no universally accepted definition of a mountain. Elevation, volume, relief, steepness, spacing and continuity have been used as criteria for defining a mountain.' },
    ];
  
    const data = {
      featuresData,
      testimonialsData,
    };
  
    return {
      props: {
        data,
      },
    };
  }