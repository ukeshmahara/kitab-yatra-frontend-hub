
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Users, Shield, Star, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Find Your Perfect Textbook",
      subtitle: "Browse thousands of secondhand books at amazing prices",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
      cta: "Start Shopping"
    },
    {
      id: 2,
      title: "Sell Your Books Easily",
      subtitle: "Turn your old textbooks into cash with our simple selling process",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      cta: "Start Selling"
    },
    {
      id: 3,
      title: "Join Our Community",
      subtitle: "Connect with students and book lovers across India",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Join Now"
    }
  ];

  const popularBooks = [
    {
      title: "Engineering Mathematics",
      author: "B.S. Grewal",
      price: "₹299",
      originalPrice: "₹799",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      condition: "Good"
    },
    {
      title: "Organic Chemistry",
      author: "Morrison & Boyd",
      price: "₹399",
      originalPrice: "₹999",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      condition: "Very Good"
    },
    {
      title: "Data Structures",
      author: "Cormen",
      price: "₹449",
      originalPrice: "₹1199",
      image: "https://images.unsplash.com/photo-1555116505-38ab61800975?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      condition: "Excellent"
    },
    {
      title: "Physics Fundamentals",
      author: "Resnick Halliday",
      price: "₹349",
      originalPrice: "₹899",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      condition: "Good"
    }
  ];

  const features = [
    {
      icon: <BookOpen className="h-12 w-12 text-orange-500" />,
      title: "Vast Collection",
      description: "Browse through thousands of textbooks across all subjects and courses."
    },
    {
      icon: <Shield className="h-12 w-12 text-orange-500" />,
      title: "Verified Sellers",
      description: "All our sellers are verified to ensure safe and secure transactions."
    },
    {
      icon: <Users className="h-12 w-12 text-orange-500" />,
      title: "Student Community",
      description: "Connect with fellow students and share knowledge and resources."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-orange-500" />,
      title: "Best Prices",
      description: "Get the best deals on secondhand books with up to 70% savings."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slideshow */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative h-full flex items-center justify-center text-center text-white px-4">
                  <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
                      {slide.subtitle}
                    </p>
                    <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 animate-scale-in">
                      {slide.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Books
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the most sought-after textbooks in our collection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularBooks.map((book, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-orange-100">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {book.condition}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{book.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{book.author}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-orange-600">{book.price}</span>
                        <span className="text-gray-400 line-through text-sm">{book.originalPrice}</span>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">4.5</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-amber-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose KitabYatra?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make buying and selling secondhand books simple, safe, and affordable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div className="flex justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">50,000+</div>
              <div className="text-gray-300">Books Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">25,000+</div>
              <div className="text-gray-300">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">1,000+</div>
              <div className="text-gray-300">Universities</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">99%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Book Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who have saved money on textbooks
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-xl">
              Browse Books
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold"
            >
              Sell Your Books
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
