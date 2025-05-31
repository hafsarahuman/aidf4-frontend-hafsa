import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 md:px-10 pt-10 pb-6 space-y-12 text-sm">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold">StayEase</h2>
          <p className="text-gray-400">
            Find the best hotel deals & travel offers all in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="text-base font-semibold">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Offers</a></li>
            <li><a href="#" className="hover:text-white">Bookings</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="md:col-span-2 space-y-3">
          <h3 className="text-base font-semibold">Subscribe to Our Newsletter</h3>
          <p className="text-gray-400">
            Get updates about new deals and exclusive promotions.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-lg">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white placeholder:text-gray-400 border border-gray-700 w-full"
            />
            <Button className="bg-amber-500 hover:bg-amber-600 text-white w-full sm:w-auto">
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-700 pt-8">
        {/* Contact Info */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold">Contact Us</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 text-amber-400" />
              hafsarahuman123@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-amber-400" />
              +94 770 360-147
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-amber-400" />
              23 Beach Ave, Matara, Sri Lanka
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-amber-400" />
              WhatsApp: +94 770 360-147
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold">Company</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold">Follow Us</h3>
          <div className="flex gap-3 text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook className="w-4 h-4 hover:text-white" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram className="w-4 h-4 hover:text-white" /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter className="w-4 h-4 hover:text-white" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin className="w-4 h-4 hover:text-white" /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><Youtube className="w-4 h-4 hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="border-t border-gray-700 pt-8 space-y-4">
        <h3 className="text-base font-semibold text-center">Our Tech Partners</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 items-center justify-center max-w-6xl mx-auto">
          {[
            { src: "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/stripe.svg", alt: "Stripe" },
            { src: "https://avatars.githubusercontent.com/u/139895814?s=200&v=4", alt: "Shadcn UI" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg", alt: "Tailwind CSS" },
            { src: "https://webassets.mongodb.com/_com_assets/global/mongodb-logo-white.png", alt: "MongoDB" },
            { src: "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png", alt: "Node.js" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", alt: "AI" },
            { src: "https://www.netlify.com/v3/img/components/logomark.png", alt: "Netlify" },
            { src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png", alt: "GitHub" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png", alt: "Express.js" },
            { src: "https://avatars.githubusercontent.com/u/114146683?s=200&v=4", alt: "LangChain" },
            { src: "https://cdn.worldvectorlogo.com/logos/typescript.svg", alt: "TypeScript" },
            { src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", alt: "React" },
            { src: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png", alt: "Redux" },
            { src: "https://i.pinimg.com/736x/ff/89/6c/ff896c9acd3406fa365bc141782341fc.jpg", alt: "Neo4j" },
            { src: "/grid/clerk.png", alt: "Clerk" },
            { src: "https://i.pinimg.com/736x/91/12/ae/9112ae1e604de6011eab619a1a5e96ec.jpg", alt: "Vercel" },
            { src: "https://cdn.worldvectorlogo.com/logos/postman.svg", alt: "Postman" }, // ✅ Added Postman
          ].map(({ src, alt }) => (
            <img
              key={alt}
              src={src}
              alt={alt}
              className="h-5 sm:h-6 md:h-7 object-contain mx-auto grayscale hover:grayscale-0 transition-all duration-300"

            />
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 text-xs pt-6 border-t border-gray-700">
        &copy; {new Date().getFullYear()} StayEase. All rights reserved.
      </div>
    </footer>
  );
}
