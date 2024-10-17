import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SuccessStoryProps {
  company: string;
  testimonial: string;
  author: string;
  position: string;
}

const SuccessStory: React.FC<SuccessStoryProps> = ({ company, testimonial, author, position }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-bold mb-2">{company}</h3>
    <p className="text-gray-600 mb-4">{testimonial}</p>
    <p className="font-bold">{author}</p>
    <p className="text-sm text-gray-500">{position}</p>
  </div>
);

const SuccessStories: React.FC = () => {
  const stories = [
    {
      company: 'TechCorp Inc.',
      testimonial: 'Futurion Partners helped us implement an AI-driven predictive maintenance system that reduced our downtime by 35% and saved us millions in operational costs.',
      author: 'Jane Smith',
      position: 'CTO, TechCorp Inc.',
    },
    {
      company: 'Global Retail Solutions',
      testimonial: 'The AI-powered customer experience platform developed by Futurion Partners increased our customer satisfaction scores by 28% and boosted our online sales by 45%.',
      author: 'Mark Johnson',
      position: 'Head of E-commerce, Global Retail Solutions',
    },
    {
      company: 'FinTech Innovations',
      testimonial: "'Futurion Partners' machine learning models helped us detect fraudulent transactions with 99.7% accuracy, significantly reducing our financial risks.'",
      author: 'Sarah Lee',
      position: 'Chief Risk Officer, FinTech Innovations',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section id="success-stories" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Success Stories</h2>
        <Slider {...settings}>
          {stories.map((story, index) => (
            <SuccessStory key={index} {...story} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SuccessStories;