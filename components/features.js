import React from 'react';


const HTMLRenderer = ({ htmlContent }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

const Features = ({ data }) => {
  return (
    <section className="features">
      <h2>Features</h2>
      <div className="features-list">
        {data.map((feature) => (
          <div key={feature.id} className="feature-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="currentColor"
                d="M20 3h-3c-1.8 0-3.4.9-4.3 2.2C12.3 3.9 10.8 3 9 3H6C3.8 3 2 4.8 2 7v10c0 2.2 1.8 4 4 4h12c2.2 0 4-1.8 4-4V7c0-2.2-1.8-4-4-4zM5 7h14c.6 0 1 .4 1 1v10c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1zm5 2v3h4v-3h-4zm0 5v3h4v-3h-4z"
              />
            </svg>
            <h3>{feature.title}</h3>
            <HTMLRenderer htmlContent={feature.description} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;





