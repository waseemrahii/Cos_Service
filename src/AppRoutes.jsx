import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Signin from './pages/Signin';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Career from './pages/Career';
import CareerDetails from './pages/CareerDetails';
import KnowledgeBase from './pages/KnowledgeBase';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ResetPassword from './components/ResetPassword';
import BlogCategory from './pages/BlogCategory';
import ForgetPassword from './components/ForgetPassword';
import Order from './pages/Order';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/resetpassword/:token" element={<ResetPassword />} />
      <Route path="/forgetpassword" element={<ForgetPassword />} />
      
      {/* Unprotected routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product/:productId" element={<ProductDetails />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blogdetails/:blogId" element={<BlogDetails />} />
      <Route path="/blogcategory/:categoryId" element={<BlogCategory />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/services" element={<Services />} />
      <Route path="/servicedetails/:serviceId" element={<ServiceDetails />} />
      <Route path="/career" element={<Career />} />
      <Route path="/careerdetails/:jobId" element={<CareerDetails />} />
      <Route path="/knowledgebase" element={<KnowledgeBase />} />
      <Route path="/team" element={<Team />} />
      <Route path="/team/:teamId" element={<Team />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order/:userId" element={<Order />} />
    </Routes>
  );
}
