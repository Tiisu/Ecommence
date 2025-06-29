import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingBag, 
  Users, 
  Award, 
  Heart,
  Truck,
  Shield,
  Clock,
  Star
} from "lucide-react";

function AboutUs() {
  const features = [
    {
      icon: ShoppingBag,
      title: "Premium Quality",
      description: "We source only the finest products from trusted brands worldwide."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to get your orders to you on time."
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Your data and transactions are protected with industry-leading security."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our customer service team is always here to help you."
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "10K+", label: "Products" },
    { number: "5+", label: "Years Experience" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Our Store</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We're passionate about bringing you the best shopping experience with quality products, 
            exceptional service, and unbeatable value.
          </p>
          <Badge variant="secondary" className="text-lg px-6 py-2">
            <Heart className="w-5 h-5 mr-2" />
            Trusted by thousands
          </Badge>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded with a vision to revolutionize online shopping, our e-commerce platform 
                has grown from a small startup to a trusted destination for millions of customers worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that shopping should be more than just a transaction – it should be an 
                experience that delights, inspires, and connects people with products they love.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to quality, innovation, and customer satisfaction drives everything we do, 
                from curating the best products to providing exceptional customer service.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Our Mission</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Excellence</h4>
                    <p className="text-gray-600">Delivering the highest quality products and services</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Community</h4>
                    <p className="text-gray-600">Building lasting relationships with our customers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Passion</h4>
                    <p className="text-gray-600">Loving what we do and sharing that enthusiasm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We never compromise on quality. Every product is carefully selected and tested 
                  to meet our high standards.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Customer Centric</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We listen, learn, and 
                  continuously improve based on your feedback.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Sustainability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We're committed to sustainable practices and supporting brands that share 
                  our vision for a better future.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;