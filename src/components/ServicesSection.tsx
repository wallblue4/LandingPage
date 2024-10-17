import React from 'react';
import { Brain, Cpu, BarChart, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-lg shadow-md transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="text-green-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: 'AI Strategy Consulting',
      description: 'Develop a tailored AI roadmap to align with your business goals and maximize ROI.',
    },
    {
      icon: <Cpu className="w-12 h-12" />,
      title: 'Machine Learning Solutions',
      description: 'Implement cutting-edge ML models to automate processes and gain valuable insights.',
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: 'Predictive Analytics',
      description: 'Leverage data-driven predictions to make informed decisions and stay ahead of the curve.',
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: 'AI-Powered Customer Experience',
      description: 'Enhance customer interactions with intelligent chatbots and personalized recommendations.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;