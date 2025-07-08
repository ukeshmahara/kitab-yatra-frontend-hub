
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  Search, 
  Star, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  MapPin,
  Heart,
  Award,
  Zap,
  Target
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Find Your Perfect Textbook",
      subtitle: "Browse thousands of secondhand books from students across Nepal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Start Shopping"
    },
    {
      id: 2,
      title: "Sell Your Books & Earn Money",
      subtitle: "Turn your old textbooks into cash and help fellow students",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Sell Now"
    },
    {
      id: 3,
      title: "Save Up to 70% on Textbooks",
      subtitle: "Quality secondhand books at unbeatable prices",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      cta: "Browse Deals"
    }
  ];

  const bookSlideshow = [
    {
      id: 1,
      title: "Engineering Mathematics",
      author: "B.S. Grewal",
      price: "Rs. 800",
      originalPrice: "Rs. 1,500",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      condition: "Good"
    },
    {
      id: 2,
      title: "Physics Class 12",
      author: "HSEB Board",
      price: "Rs. 350",
      originalPrice: "Rs. 700",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      condition: "Very Good"
    },
    {
      id: 3,
      title: "Data Structures",
      author: "Cormen",
      price: "Rs. 1,200",
      originalPrice: "Rs. 2,500",
      image: "https://images.unsplash.com/photo-1555116505-38ab61800975?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      condition: "Excellent"
    },
    {
      id: 4,
      title: "English Literature",
      author: "Various Authors",
      price: "Rs. 450",
      originalPrice: "Rs. 900",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      condition: "Good"
    },
    {
      id: 5,
      title: "Chemistry Class 11",
      author: "Dr. Bahl",
      price: "Rs. 500",
      originalPrice: "Rs. 1,000",
      image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      condition: "Very Good"
    },
    {
      id: 6,
      title: "Computer Science",
      author: "Sumita Arora",
      price: "Rs. 650",
      originalPrice: "Rs. 1,300",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      condition: "Excellent"
    }
  ];

  const featuredBooks = [
    {
      id: 1,
      title: "Data Structures and Algorithms",
      author: "Cormen",
      price: "Rs. 1,200",
      originalPrice: "Rs. 2,500",
      condition: "Good",
      seller: "Rajesh Sharma",
      location: "Kathmandu",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.5
    },
    {
      id: 2,
      title: "Physics Class 12",
      author: "HSEB Board",
      price: "Rs. 400",
      originalPrice: "Rs. 800",
      condition: "Very Good",
      seller: "Priya Thapa",
      location: "Pokhara",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.8
    },
    {
      id: 3,
      title: "English Literature",
      author: "Various Authors",
      price: "Rs. 600",
      originalPrice: "Rs. 1,200",
      condition: "Excellent",
      seller: "Amit Gurung",
      location: "Lalitpur",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.7
    },
    {
      id: 4,
      title: "Mathematics Class 11",
      author: "Dr. Simkhada",
      price: "Rs. 350",
      originalPrice: "Rs. 700",
      condition: "Good",
      seller: "Sita Rai",
      location: "Bhaktapur",
      image: "https://images.unsplash.com/photo-1555116505-38ab61800975?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.3
    }
  ];

  const features = [
    {
      icon: <BookOpen className="h-12 w-12 text-orange-500" />,
      title: "Wide Selection",
      description: "Thousands of textbooks across all subjects and levels"
    },
    {
      icon: <Users className="h-12 w-12 text-orange-500" />,
      title: "Student Community",
      description: "Connect with students from universities across Nepal"
    },
    {
      icon: <ShieldCheck className="h-12 w-12 text-orange-500" />,
      title: "Safe & Secure",
      description: "Verified sellers and secure payment options"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-orange-500" />,
      title: "Best Prices",
      description: "Save up to 70% compared to new book prices"
    }
  ];

  const highlights = [
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "Trusted Platform",
      description: "Nepal's #1 secondhand book marketplace"
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-500" />,
      title: "Quick Delivery",
      description: "Fast delivery across major cities in Nepal"
    },
    {
      icon: <Target className="h-8 w-8 text-orange-500" />,
      title: "Quality Assured",
      description: "Every book is quality checked before listing"
    }
  ];

  const stats = [
    { number: "25,000+", label: "Happy Students" },
    { number: "50,000+", label: "Books Sold" },
    { number: "500+", label: "Schools & Colleges" },
    { number: "Rs. 1Cr+", label: "Money Saved" }
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      {/* Hero Slideshow */}
      <section className="relative h-[600px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
                    {slide.subtitle}
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 animate-scale-in"
                  >
                    {slide.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Book Slideshow Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Books Available
            </h2>
            <p className="text-xl text-gray-600">
              Fresh arrivals from students across Nepal
            </p>
          </div>

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-1">
              {bookSlideshow.map((book) => (
                <CarouselItem key={book.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-1">{book.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <span className="text-lg font-bold text-orange-600">{book.price}</span>
                              <span className="text-sm text-gray-500 line-through ml-2">{book.originalPrice}</span>
                            </div>
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{book.condition}</span>
                          </div>
                          <Button size="sm" className="w-full bg-gradient-to-r from-orange-500 to-amber-500">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Book
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Search through thousands of textbooks from students across Nepal
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for books, authors, subjects..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 px-8 py-3">
              Search Books
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Books
            </h2>
            <p className="text-xl text-gray-600">
              Popular textbooks from verified sellers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredBooks.map((book) => (
              <Card key={book.id} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{book.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-3 w-3 ${i < Math.floor(book.rating) ? 'fill-current' : ''}`} />
                        ))}
                      </div>
                      <span className="ml-1 text-xs text-gray-500">({book.rating})</span>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-lg font-bold text-orange-600">{book.price}</span>
                        <span className="text-sm text-gray-500 line-through ml-2">{book.originalPrice}</span>
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{book.condition}</span>
                    </div>

                    <div className="text-sm text-gray-600 mb-3">
                      <p>Seller: {book.seller}</p>
                      <p className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {book.location}
                      </p>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500">
                        Contact Seller
                      </Button>
                      <Button size="sm" variant="outline">
                        <Heart className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-50">
                View All Books
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose KitabYatra?
            </h2>
            <p className="text-xl text-gray-600">
              Nepal's most trusted platform for secondhand books
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
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

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl opacity-90">Making education affordable for students across Nepal</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-orange-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
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
            Join thousands of students who are saving money and sharing knowledge
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                Get Started Free
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg font-semibold transition-all duration-300">
                Browse Books
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
