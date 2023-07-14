import React from 'react';

const Testimonials = () => {
  // Replace the following placeholder data with your actual testimonials data
  const testimonialsData = [
    {
      id: 1,
      name: 'John Doe',
      testimonial: 'Hello! My name is Jonathan Doe working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.',
    },
    {
      id: 2,
      name: 'Jane Smith',
      testimonial: 'There is no universally accepted definition of a mountain. Elevation, volume, relief, steepness, spacing and continuity have been used as criteria for defining a mountain.',
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimonials-list">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item">
              <p className="testimonial-text">{testimonial.testimonial}</p>
              <p className="testimonial-name">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
