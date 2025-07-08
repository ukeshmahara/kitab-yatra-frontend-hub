
import { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Heart, 
  ShoppingCart,
  Star, 
  TrendingUp, 
  Users, 
  ShoppingBag,
  Settings,
  LogOut,
  Eye,
  MessageCircle,
  Filter,
  MapPin
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { toast } from '../hooks/use-toast';

const Dashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('browse');

  const availableBooks = [
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
      title: "Operating Systems",
      author: "Galvin",
      price: "Rs. 900",
      originalPrice: "Rs. 1,800",
      condition: "Very Good",
      seller: "Priya Thapa",
      location: "Pokhara",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.8
    },
    {
      id: 3,
      title: "Physics Class 12",
      author: "HSEB Board",
      price: "Rs. 400",
      originalPrice: "Rs. 800",
      condition: "Fair",
      seller: "Amit Gurung",
      location: "Lalitpur",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.2
    },
    {
      id: 4,
      title: "English Literature",
      author: "Various Authors",
      price: "Rs. 600",
      originalPrice: "Rs. 1,200",
      condition: "Excellent",
      seller: "Sita Rai",
      location: "Bhaktapur",
      image: "https://images.unsplash.com/photo-1555116505-38ab61800975?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      rating: 4.7
    }
  ];

  const wishlist = [
    {
      id: 1,
      title: "Machine Learning",
      author: "Tom Mitchell",
      price: "Rs. 1,500",
      seller: "Rahul Kumar",
      location: "Kathmandu",
      image: "https://images.unsplash.com/photo-1555116505-38ab61800975?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      title: "Database Systems",
      author: "Korth",
      price: "Rs. 800",
      seller: "Anita Sharma",
      location: "Pokhara",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const myOrders = [
    {
      id: 1,
      title: "Java Programming",
      author: "Herbert Schildt",
      price: "Rs. 1,100",
      seller: "Krishna Lama",
      status: "Delivered",
      orderDate: "2024-01-15",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      id: 2,
      title: "Calculus",
      author: "James Stewart",
      price: "Rs. 950",
      seller: "Maya Shrestha",
      status: "In Transit",
      orderDate: "2024-01-20",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const stats = [
    { title: 'Books Bought', value: '8', icon: ShoppingBag, color: 'text-green-600' },
    { title: 'Money Saved', value: 'Rs. 12,000', icon: TrendingUp, color: 'text-blue-600' },
    { title: 'Wishlist Items', value: '15', icon: Heart, color: 'text-red-600' },
    { title: 'Books Reviewed', value: '5', icon: Star, color: 'text-yellow-600' }
  ];

  const handleAddToWishlist = (bookId) => {
    toast({
      title: "Added to Wishlist",
      description: "Book has been added to your wishlist",
    });
  };

  const handleContactSeller = (sellerName) => {
    toast({
      title: "Contact Seller",
      description: `Redirecting to chat with ${sellerName}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name || 'Book Lover'}!</h1>
              <p className="text-gray-600 mt-1">Discover amazing secondhand books across Nepal</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                <Search className="h-4 w-4 mr-2" />
                Search Books
              </Button>
              <Button onClick={onLogout} variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex space-x-8">
            {[
              { id: 'browse', label: 'Browse Books' },
              { id: 'wishlist', label: 'My Wishlist' },
              { id: 'orders', label: 'My Orders' },
              { id: 'profile', label: 'Profile' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content based on active tab */}
        {activeTab === 'browse' && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`p-3 rounded-lg bg-gray-50 ${stat.color}`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Filter Section */}
            <Card>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Category
                  </Button>
                  <Button variant="outline" size="sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    Location
                  </Button>
                  <Button variant="outline" size="sm">
                    Price Range
                  </Button>
                  <Button variant="outline" size="sm">
                    Condition
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Available Books */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Available Books</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {availableBooks.map((book) => (
                  <Card key={book.id} className="hover:shadow-lg transition-shadow">
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

                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <span className="text-lg font-bold text-orange-600">{book.price}</span>
                            <span className="text-sm text-gray-500 line-through ml-2">{book.originalPrice}</span>
                          </div>
                          <Badge variant="secondary">{book.condition}</Badge>
                        </div>

                        <div className="text-sm text-gray-600 mb-3">
                          <p>Seller: {book.seller}</p>
                          <p className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {book.location}
                          </p>
                        </div>

                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            className="flex-1 bg-gradient-to-r from-orange-500 to-amber-500"
                            onClick={() => handleContactSeller(book.seller)}
                          >
                            <MessageCircle className="h-3 w-3 mr-1" />
                            Contact
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleAddToWishlist(book.id)}
                          >
                            <Heart className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'wishlist' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">My Wishlist</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.map((book) => (
                <Card key={book.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-1">{book.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{book.author}</p>
                      <p className="text-gray-500 text-sm mb-2">Seller: {book.seller}</p>
                      <p className="text-gray-500 text-sm mb-3 flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {book.location}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-orange-600">{book.price}</span>
                        <Button size="sm" className="bg-gradient-to-r from-orange-500 to-amber-500">
                          Contact Seller
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">My Orders</h2>
            
            <div className="space-y-4">
              {myOrders.map((order) => (
                <Card key={order.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={order.image}
                        alt={order.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{order.title}</h3>
                        <p className="text-gray-600 text-sm">{order.author}</p>
                        <p className="text-gray-500 text-sm">Seller: {order.seller}</p>
                        <p className="text-gray-500 text-sm">Order Date: {order.orderDate}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-orange-600">{order.price}</p>
                        <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Profile Settings</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <p className="text-gray-900 mt-1">{user?.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <p className="text-gray-900 mt-1">{user?.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <p className="text-gray-900 mt-1">{user?.phone}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Address</label>
                    <p className="text-gray-900 mt-1">{user?.address}</p>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                    <Settings className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Statistics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Member Since</label>
                    <p className="text-gray-900 mt-1">January 2024</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Total Orders</label>
                    <p className="text-gray-900 mt-1">8 orders</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Money Saved</label>
                    <p className="text-gray-900 mt-1">Rs. 12,000</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Buyer Rating</label>
                    <div className="flex items-center mt-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">(5.0/5)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
