import Head from 'next/head';
import Footer from '/components/Footer';
import Header from '/components/Header';
import 'public/images/Maktub-primary_logo.png';
import '/styles/global.css';

export default function Home() {
    return (
      <div>
        <Head>
          <title>Far far away, behind the word mountains-Siddhartha</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Header />
        <main>
            <div className='container'>
                <h1>About the Author</h1>
                <p className='author_line'>Name: Siddhartha Chaudhuri</p>                
                <p></p>
                <p className='author_line'>Email: siddharthachaudhuri66@gmail.com</p>
                <p className='author_line'>Github: <a href='https://github.com/Siddhartha21bros'>https://github.com/Siddhartha21bros</a></p>
                
            </div>
        </main>

        <Footer />

        </div>
    )
}