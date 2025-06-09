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
    <footer className="bg-gray-900 text-white px-4 md:px-10 pt-8 pb-4 text-sm">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Brand Info */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold">StayEase</h2>
          <p className="text-gray-400 text-sm">
            Find the best hotel deals & travel offers all in one place.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h3 className="text-base font-semibold">Contact Us</h3>
          <ul className="text-gray-300 space-y-1 text-sm">
            <li className="flex items-start gap-2">
              <Mail className="w-4 h-4 text-amber-400" />
              hafsarahuman123@gmail.com
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              +94 770 360-147
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              23 Beach Ave, Matara, Sri Lanka
            </li>
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 text-amber-400" />
              WhatsApp: +94 770 360-147
            </li>
          </ul>
        </div>

        {/* Company Links and Social */}
        <div className="space-y-3">
          <h3 className="text-base font-semibold">Company</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
          <div className="flex gap-3 mt-3 text-gray-400">
            <a href="https://facebook.com" target="_blank"><Facebook className="w-4 h-4 hover:text-white" /></a>
            <a href="https://instagram.com" target="_blank"><Instagram className="w-4 h-4 hover:text-white" /></a>
            <a href="https://twitter.com" target="_blank"><Twitter className="w-4 h-4 hover:text-white" /></a>
            <a href="https://linkedin.com" target="_blank"><Linkedin className="w-4 h-4 hover:text-white" /></a>
            <a href="https://youtube.com" target="_blank"><Youtube className="w-4 h-4 hover:text-white" /></a>
          </div>
        </div>
      </div>

      {/* Tech Partners */}
      <div className="border-t border-gray-700 mt-6 pt-4 space-y-3">
        <h3 className="text-sm font-semibold text-center">Our Tech Partners</h3>
        <div className="flex flex-wrap justify-center items-center gap-4 px-4">
          {[
            "https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/stripe.svg",
            "https://avatars.githubusercontent.com/u/139895814?s=200&v=4",
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
            "https://webassets.mongodb.com/_com_assets/global/mongodb-logo-white.png",
            "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
            "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
            "https://www.netlify.com/v3/img/components/logomark.png",
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
            "https://cdn.worldvectorlogo.com/logos/typescript.svg",
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
            "/grid/clerk.png",
            "https://i.pinimg.com/736x/91/12/ae/9112ae1e604de6011eab619a1a5e96ec.jpg",
            "https://cdn.worldvectorlogo.com/logos/postman.svg",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Tech Partner"
              className="h-5 sm:h-6 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 text-xs pt-4 border-t border-gray-700 mt-4">
        &copy; {new Date().getFullYear()} StayEase. All rights reserved.
      </div>
    </footer>
  );
}
