import React from 'react';
import image from 'public/man_in_hat.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero__title">Far far away, behind the word mountains</h1>
        <p className='extras'>August 15, 2019 <strong>-</strong>  2 min read</p>
        <div className="button-group">
          <button className="small-button like-button">
            <span className="icon" role="img" aria-label="Like Icon">👍</span> Like
          </button>
          <button className="small-button comment-button">
            <span className="icon" role="img" aria-label="Comment Icon">💬</span> Comment
          </button>
        </div>
        <p></p>
        <p></p>
        <img src={ image }/>
        <p></p>
        <p></p>
        <p className="hero__lines">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.<br></br>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.<br></br>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
        <blockquote class="wp-block-quote">
        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
        <cite>John Doe</cite>
        </blockquote>
        <p></p>
        <p className="hero__lines">She packed her seven versalia, put her initial into the belt and made herself on the way.<br></br>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.</p>
        <h2 className="hero__subtitle">Little Blind Text</h2>
        <p className="hero__lines">Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy.<br></br>The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word “and” and the Little Blind Text should turn around and return to its own, safe country.</p>
        <ul>
            <li>But nothing the copy said could convince her and so it didn’t take long until a few insidious <strong>Copy Writers</strong>  ambushed her,</li>
            <li>Made her drunk with <strong>Longe </strong>and <strong>Parole </strong>and dragged her into their agency.</li>
            <li>Where they abused her for their projects again and again.</li>
        </ul>
        <p className="hero__lines">And if she hasn’t been rewritten, then they are still using her. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <h2 className="hero__subtitle">Bookmarksgrove</h2>
        <p className="hero__lines">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.It is a paradisematic country, in which roasted parts of sentences fly into your mouth.Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline</p>
        <p></p>
        <p></p>
        <p></p>
        <p className='hero_lines'>Share This Article on</p>
        <a href="https://www.facebook.com/" className="hero-btn1">Facebook</a>
        <a href="https://www.instagram.com/" className="hero-btn2">Instagram</a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den" className="hero-btn3">Twitter</a>
        <a href="https://web.whatsapp.com/" className="hero-btn4">Whatsapp</a>
      </div>
    </section>
  );
};

export default Hero;
