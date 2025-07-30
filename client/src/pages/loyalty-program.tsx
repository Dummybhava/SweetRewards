import { Bell, Gift, ShoppingBag, Coins, Star, Sparkles, Users, CircleOff, UserPlus, ShoppingCart, CandyCane, Percent, Cake, Crown, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CountdownTimer } from "@/components/countdown-timer";
import { AnimatedSparkles } from "@/components/animated-sparkles";

export default function LoyaltyProgram() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dd-cream via-white to-orange-50 font-inter">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-dd-orange to-dd-yellow rounded-full flex items-center justify-center">
                <CandyCane className="text-white w-5 h-5" />
              </div>
              <span className="text-2xl font-poppins font-bold text-dd-brown">Dakshi Delight</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-dd-brown hover:text-dd-orange transition-colors">Home</a>
              <a href="#" className="text-dd-brown hover:text-dd-orange transition-colors">Products</a>
              <a href="#" className="text-dd-brown hover:text-dd-orange transition-colors">About</a>
              <a href="#" className="text-dd-brown hover:text-dd-orange transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Banner: Loyalty Launch */}
      <section className="relative overflow-hidden bg-gradient-to-r from-dd-orange via-dd-red to-dd-yellow py-20 lg:py-32">
        <AnimatedSparkles />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-poppins font-bold text-white leading-tight">
                  Introducing
                  <span className="block text-dd-cream animate-pulse-slow">DD Delight Points!</span>
                </h1>
                <p className="text-xl lg:text-2xl text-dd-cream font-medium">
                  Earn rewards on every bite 🍬
                </p>
                <p className="text-lg text-white/90 max-w-md">
                  Turn your sweet cravings into sweet rewards! Every purchase earns you points that unlock exclusive treats and discounts.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-white text-dd-orange px-8 py-4 rounded-full font-poppins font-bold text-lg hover:bg-dd-cream transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <Star className="mr-2 w-5 h-5" />
                  Start Earning Now
                </Button>
                <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-full font-poppins font-bold text-lg hover:bg-white hover:text-dd-orange transition-all duration-300">
                  <Users className="mr-2 w-5 h-5" />
                  Join the Club
                </Button>
              </div>
            </div>
            
            <div className="relative">
              {/* Beautiful platter of sweets with golden coin glow effect */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1599785209707-a456fc1337bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Traditional Indian sweets platter with golden glow" 
                  className="w-full h-auto"
                />
                {/* Golden coin overlay effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-dd-yellow/30 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 w-16 h-16 bg-dd-yellow rounded-full flex items-center justify-center animate-bounce-slow shadow-lg">
                  <Coins className="text-white w-8 h-8" />
                </div>
              </div>
              
              {/* Loyalty card mockup */}
              <Card className="absolute -bottom-6 -left-6 bg-gradient-to-r from-dd-orange to-dd-red p-6 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-white space-y-2">
                  <h3 className="font-poppins font-bold text-lg">DD Delight Card</h3>
                  <div className="flex items-center space-x-2">
                    <Star className="text-dd-yellow w-4 h-4" />
                    <span className="text-sm">1,250 Points</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Banner: Pre-launch Teaser */}
      <section className="bg-gradient-to-r from-dd-yellow via-orange-400 to-dd-orange py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-white">
                Something Sweet is Coming...
              </h2>
              <p className="text-xl text-white/90">
                Our rewards program launches soon!
              </p>
            </div>
            
            {/* Countdown Timer */}
            <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto">
              <CountdownTimer />
            </div>
            
            <Button className="bg-white text-dd-orange px-8 py-4 rounded-full font-poppins font-bold text-lg hover:bg-dd-cream transform hover:scale-105 transition-all duration-300 shadow-lg">
              <Bell className="mr-2 w-5 h-5" />
              Get Notified First
            </Button>
          </div>
        </div>
      </section>

      {/* Launch Week Offer Banner */}
      <section className="bg-gradient-to-br from-dd-red via-pink-500 to-dd-orange py-20 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-4">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full">
                  <span className="text-white font-poppins font-bold text-sm uppercase tracking-wide">
                    <Gift className="inline mr-2 w-4 h-4" />
                    Limited Time
                  </span>
                </div>
                <h2 className="text-5xl lg:text-6xl font-poppins font-bold text-white leading-tight">
                  Launch Week
                  <span className="block text-dd-cream">Exclusive!</span>
                </h2>
                <p className="text-xl lg:text-2xl text-white/90">
                  Earn 2X Delight Points on all orders this week 🍭
                </p>
              </div>
              
              <Card className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto lg:mx-0">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-poppins font-bold text-dd-cream">2X</div>
                  <div className="text-white text-lg">Points on Every Purchase</div>
                  <div className="text-white/80 text-sm">Valid until March 31st</div>
                </div>
              </Card>
              
              <Button className="bg-white text-dd-red px-8 py-4 rounded-full font-poppins font-bold text-lg hover:bg-dd-cream transform hover:scale-105 transition-all duration-300 shadow-lg">
                <ShoppingCart className="mr-2 w-5 h-5" />
                Shop & Earn
              </Button>
            </div>
            
            <div className="relative">
              {/* Exploding gift box with sparkle effects */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Gift box explosion with rewards and confetti" 
                  className="rounded-3xl shadow-2xl w-full h-auto animate-float"
                />
                
                {/* Star sparkle effects around the image */}
                <div className="absolute -top-4 -left-4 text-dd-yellow text-2xl animate-sparkle">
                  <Star className="w-6 h-6 fill-current" />
                </div>
                <div className="absolute -top-2 -right-2 text-white text-xl animate-sparkle" style={{ animationDelay: '0.5s' }}>
                  <Sparkles className="w-5 h-5 fill-current" />
                </div>
                <div className="absolute -bottom-4 -right-4 text-dd-cream text-3xl animate-sparkle" style={{ animationDelay: '1s' }}>
                  <Star className="w-8 h-8 fill-current" />
                </div>
                <div className="absolute -bottom-2 -left-2 text-dd-yellow text-lg animate-sparkle" style={{ animationDelay: '1.5s' }}>
                  <Sparkles className="w-4 h-4 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How DD Delight Points Work - Explainer Section */}
      <section className="py-20 bg-gradient-to-b from-white to-dd-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-dd-brown">
              How DD Delight Points Work
            </h2>
            <p className="text-xl text-dd-brown/80 max-w-2xl mx-auto">
              It's simple, sweet, and rewarding! Follow these three easy steps to start earning delicious rewards.
            </p>
          </div>
          
          {/* 3-step process cards */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Step 1: Order */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-dd-orange to-dd-red rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <ShoppingBag className="text-white w-16 h-16" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-dd-yellow rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-poppins font-bold text-sm">1</span>
                </div>
                {/* Connecting line */}
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-dd-orange to-transparent"></div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-poppins font-bold text-dd-brown">Order Your Favorite Sweets</h3>
                <p className="text-dd-brown/70 leading-relaxed">
                  Browse our delicious collection of traditional Indian sweets and place your order. Every rupee spent earns you points!
                </p>
                <Card className="bg-dd-cream/50 rounded-2xl p-4 max-w-xs mx-auto">
                  <div className="text-sm text-dd-brown">
                    <Coins className="inline text-dd-yellow mr-1 w-4 h-4" />
                    <span className="font-semibold">₹100 = 10 Points</span>
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Step 2: Earn */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-dd-yellow to-orange-400 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Coins className="text-white w-16 h-16 animate-bounce-slow" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-dd-red rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-poppins font-bold text-sm">2</span>
                </div>
                {/* Connecting line */}
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-dd-yellow to-transparent"></div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-poppins font-bold text-dd-brown">Earn Points Instantly</h3>
                <p className="text-dd-brown/70 leading-relaxed">
                  Watch your points add up automatically with every purchase. Bonus points during special promotions and festive seasons!
                </p>
                <Card className="bg-dd-cream/50 rounded-2xl p-4 max-w-xs mx-auto">
                  <div className="text-sm text-dd-brown">
                    <Gift className="inline text-dd-red mr-1 w-4 h-4" />
                    <span className="font-semibold">Bonus: 2X Points Week</span>
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Step 3: Redeem */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Gift className="text-white w-16 h-16" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-dd-orange rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-poppins font-bold text-sm">3</span>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-poppins font-bold text-dd-brown">Redeem for Free Treats!</h3>
                <p className="text-dd-brown/70 leading-relaxed">
                  Use your points to get discounts, free sweets, or exclusive limited-edition treats. The more you collect, the sweeter the rewards!
                </p>
                <Card className="bg-dd-cream/50 rounded-2xl p-4 max-w-xs mx-auto">
                  <div className="text-sm text-dd-brown">
                    <Star className="inline text-green-500 mr-1 w-4 h-4" />
                    <span className="font-semibold">500 Points = Free Sweet Box</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-16">
            <Button className="bg-gradient-to-r from-dd-orange to-dd-red text-white px-12 py-4 rounded-full font-poppins font-bold text-xl hover:from-dd-red hover:to-dd-orange transform hover:scale-105 transition-all duration-300 shadow-xl">
              <Star className="mr-2 w-6 h-6" />
              Explore Rewards
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Showcase */}
      <section className="py-16 bg-gradient-to-r from-dd-brown to-amber-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-dd-yellow rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Percent className="text-white w-8 h-8" />
              </div>
              <h3 className="font-poppins font-bold text-white text-lg">Exclusive Discounts</h3>
              <p className="text-white/80 text-sm">Up to 20% off on premium sweets</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-dd-red rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Cake className="text-white w-8 h-8" />
              </div>
              <h3 className="font-poppins font-bold text-white text-lg">Birthday Treats</h3>
              <p className="text-white/80 text-sm">Special bonus points on your birthday</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-dd-orange rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Crown className="text-white w-8 h-8" />
              </div>
              <h3 className="font-poppins font-bold text-white text-lg">VIP Access</h3>
              <p className="text-white/80 text-sm">Early access to new products</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
                <Truck className="text-white w-8 h-8" />
              </div>
              <h3 className="font-poppins font-bold text-white text-lg">Free Shipping</h3>
              <p className="text-white/80 text-sm">Free delivery on rewards redemption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-gradient-to-t from-dd-cream to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-dd-brown">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-dd-brown/80">
              Join thousands of sweet lovers already earning DD Delight Points!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-dd-orange to-dd-red text-white px-8 py-4 rounded-full font-poppins font-bold text-lg hover:from-dd-red hover:to-dd-orange transform hover:scale-105 transition-all duration-300 shadow-lg">
                <UserPlus className="mr-2 w-5 h-5" />
                Sign Up Now
              </Button>
              <Button variant="outline" className="border-2 border-dd-orange text-dd-orange px-8 py-4 rounded-full font-poppins font-bold text-lg hover:bg-dd-orange hover:text-white transition-all duration-300">
                <CircleOff className="mr-2 w-5 h-5" />
                Learn More
              </Button>
            </div>
            
            {/* Social proof */}
            <div className="flex justify-center items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-poppins font-bold text-dd-orange">10K+</div>
                <div className="text-sm text-dd-brown/70">Happy Members</div>
              </div>
              <div className="w-px h-12 bg-dd-brown/20"></div>
              <div className="text-center">
                <div className="text-2xl font-poppins font-bold text-dd-orange">50K+</div>
                <div className="text-sm text-dd-brown/70">Points Redeemed</div>
              </div>
              <div className="w-px h-12 bg-dd-brown/20"></div>
              <div className="text-center">
                <div className="text-2xl font-poppins font-bold text-dd-orange">₹5L+</div>
                <div className="text-sm text-dd-brown/70">Savings Earned</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
