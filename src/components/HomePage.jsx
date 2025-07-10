import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  ShoppingBag, 
  Star, 
  ArrowRight,
  TrendingUp,
  Shield,
  Clock,
  Heart,
  Award,
  Zap,
  Target,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

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
      subtitle: "Connect with students and book lovers across Nepal",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      cta: "Join Now"
    }
  ];

  const featuredBooks = [
    {
      id: 1,
      title: "गणित कक्षा १२",
      author: "शिक्षा मन्त्रालय",
      price: "Rs. 450",
      originalPrice: "Rs. 800",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      condition: "Good",
      seller: "राम शर्मा"
    },
    {
      id: 2,
      title: "नेपाली साहित्यको इतिहास",
      author: "डा. मोहन हिमांशु",
      price: "Rs. 650",
      originalPrice: "Rs. 1200",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      condition: "Very Good",
      seller: "सीता राई"
    },
    {
      id: 3,
      title: "समाजशास्त्र कक्षा ११",
      author: "पाठ्यक्रम विकास केन्द्र",
      price: "Rs. 350",
      originalPrice: "Rs. 600",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      condition: "Fair",
      seller: "अमित गुरुङ"
    },
    {
      id: 4,
      title: "भौतिकशास्त्र कक्षा १२",
      author: "राष्ट्रिय परीक्षा बोर्ड",
      price: "Rs. 550",
      originalPrice: "Rs. 950",
      image: "https://images.unsplash.com/photo-1555116505-38ab61800975?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      condition: "Excellent",
      seller: "प्रिया थापा"
    },
    {
      id: 5,
      title: "अंग्रेजी व्याकरण र रचना",
      author: "डा. केशव प्रसाद उप्रेती",
      price: "Rs. 420",
      originalPrice: "Rs. 750",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      condition: "Good",
      seller: "मिना श्रेष्ठ"
    },
    {
      id: 6,
      title: "कम्प्युटर विज्ञान कक्षा ११",
      author: "शिक्षा मन्त्रालय",
      price: "Rs. 380",
      originalPrice: "Rs. 700",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      condition: "Very Good",
      seller: "राजेश लामा"
    },
    {
      id: 7,
      title: "जीवविज्ञान कक्षा १०",
      author: "जानकी शिक्षा सामग्री केन्द्र",
      price: "Rs. 290",
      originalPrice: "Rs. 520",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      condition: "Good",
      seller: "सरिता पौडेल"
    },
    {
      id: 8,
      title: "इतिहास कक्षा ९",
      author: "पाठ्यक्रम विकास केन्द्र",
      price: "Rs. 320",
      originalPrice: "Rs. 580",
      image: "https://images.unsplash.com/photo-1555116505-38ab61800975?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      condition: "Fair",
      seller: "दीपक तामाङ"
    }
  ];

  const highlights = [
    {
      id: 1,
      title: "Wide Selection",
      description: "Thousands of books from various categories",
      icon: BookOpen
    },
    {
      id: 2,
      title: "Great Savings",
      description: "Save up to 70% on secondhand books",
      icon: TrendingUp
    },
    {
      id: 3,
      title: "Secure Transactions",
      description: "Safe and secure payment options",
      icon: Shield
    },
    {
      id: 4,
      title: "Fast Delivery",
      description: "Quick and reliable delivery across Nepal",
      icon: Clock
    }
  ];

  const keyFeatures = [
    {
      id: 1,
      title: "Wishlist",
      description: "Save your favorite books for later",
      icon: Heart
    },
    {
      id: 2,
      title: "Seller Ratings",
      description: "Find trusted sellers with high ratings",
      icon: Star
    },
    {
      id: 3,
      title: "Rewards Program",
      description: "Earn points and get exclusive discounts",
      icon: Award
    },
    {
      id: 4,
      title: "Instant Buy",
      description: "Buy books quickly with one click",
      icon: Zap
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Prakash Shrestha",
      location: "Kathmandu",
      text: "KitabYatra is a game-changer! I found all my textbooks at half the price. Highly recommended!",
      rating: 5
    },
    {
      id: 2,
      name: "Anjali Thapa",
      location: "Pokhara",
      text: "Selling my old books was so easy. I made some extra cash and helped out other students. Great platform!",
      rating: 4
    },
    {
      id: 3,
      name: "Suresh Kumar",
      location: "Biratnagar",
      text: "I love the variety of books available. The prices are unbeatable and the delivery is fast. Thank you, KitabYatra!",
      rating: 5
    }
  ];

  const stats = [
    {
      id: 1,
      value: "5,000+",
      label: "Books Listed",
      icon: BookOpen
    },
    {
      id: 2,
      value: "2,000+",
      label: "Happy Users",
      icon: Users
    },
    {
      id: 3,
      value: "1,500+",
      label: "Books Sold",
      icon: ShoppingBag
    },
    {
      id: 4,
      value: "4.8/5",
      label: "Average Rating",
      icon: Star
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
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

      {/* Key Highlights */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight) => (
              <Card key={highlight.id} className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full shadow-md mb-3">
                    <highlight.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Nepali Books
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover amazing deals on Nepali textbooks and literature from students across Nepal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredBooks.map((book) => (
              <Card key={book.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-orange-600">{book.price}</span>
                        <span className="text-sm text-gray-500 line-through">{book.originalPrice}</span>
                      </div>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {book.condition}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">Seller: {book.seller}</p>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/dashboard">
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                View All Books
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose KitabYatra */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose KitabYatra?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer the best platform to buy and sell secondhand books in Nepal, with amazing features and benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature) => (
              <Card key={feature.id} className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full shadow-md mb-3">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Read testimonials from our happy users across Nepal who have benefited from KitabYatra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-gray-500" />
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the impact we're making in the secondhand book market in Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.id} className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="p-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full shadow-md mb-3">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
