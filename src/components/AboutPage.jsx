
import { BookOpen, Users, Shield, Award, Heart, Target } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const AboutPage = () => {
  const features = [
    {
      icon: <BookOpen className="h-12 w-12 text-orange-500" />,
      title: "Vast Book Collection",
      description: "Access thousands of textbooks across all subjects, courses, and academic levels from fellow students."
    },
    {
      icon: <Users className="h-12 w-12 text-orange-500" />,
      title: "Student Community",
      description: "Connect with students from universities across Nepal. Share knowledge, resources, and experiences."
    },
    {
      icon: <Shield className="h-12 w-12 text-orange-500" />,
      title: "Safe & Secure",
      description: "All transactions are secure. We verify sellers and ensure safe exchanges for peace of mind."
    },
    {
      icon: <Award className="h-12 w-12 text-orange-500" />,
      title: "Quality Assured",
      description: "Every book is quality-checked and accurately described with condition ratings and clear photos."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl shadow-xl">
              <BookOpen className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">KitabYatra</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Empowering students across Nepal to buy and sell secondhand textbooks, 
            making quality education accessible and affordable for everyone.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that every student deserves access to quality educational resources without 
                financial barriers. KitabYatra was born from the simple idea that textbooks shouldn't 
                cost a fortune and shouldn't end up gathering dust after a semester.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By creating a trusted marketplace for secondhand books, we're not just saving money 
                for students - we're building a sustainable ecosystem that reduces waste and promotes 
                the circular economy in education.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Students studying together"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-6 text-white shadow-xl">
                <Heart className="h-8 w-8 mb-2" />
                <p className="font-semibold">25,000+ Happy Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Students Choose KitabYatra
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We've built features that make buying and selling textbooks simple, safe, and rewarding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 border-orange-100">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90">Making a difference in students' lives across Nepal</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">50,000+</div>
              <div className="text-gray-300">Books Exchanged</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">25,000+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-gray-300">Schools & Colleges</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">Rs. 1Cr+</div>
              <div className="text-gray-300">Money Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the KitabYatra Community
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of Nepal's largest student book-sharing community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/register"
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold shadow-xl transition-all duration-300 hover:shadow-2xl"
            >
              Get Started Today
            </a>
            <a 
              href="/"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              Browse Books
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
