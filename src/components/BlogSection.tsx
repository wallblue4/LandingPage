import React from 'react';

interface BlogPostProps {
  title: string;
  excerpt: string;
  imageUrl: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <a href="#" className="text-green-500 font-bold hover:underline">Read More</a>
    </div>
  </div>
);

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'Explore how artificial intelligence is reshaping industries and creating new opportunities for growth.',
      imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Implementing Machine Learning in Your Organization',
      excerpt: 'Learn the best practices for integrating machine learning solutions into your existing business processes.',
      imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Ethical Considerations in AI Development',
      excerpt: 'Discover the key ethical challenges facing AI development and how to address them responsibly.',
      imageUrl: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Latest Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;