import Link from "next/link";
import { IconType } from "react-icons/lib";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

interface SocialLink {
  href: string;
  icon: IconType;
  name: string;
}

//Navigate
const navigate = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/design-lab", label: "Design your own" },
  { href: "/inspiration", label: "Inspiration" },
  { href: "/contact", label: "Contact" },
];

// Quick links
const quickLinks = [
  { href: "/contact", label: "FAQ" },
  { href: "/shop", label: "Shop" },
  { href: "/design-lab", label: "Design your own" },
  { href: "/inspiration", label: "Inspiration" },
];

// Social links
const socialLinks: SocialLink[] = [
  { href: "/example-url", icon: FaFacebook, name: "Facebook" },
  { href: "/example-url", icon: FaTwitter, name: "Twitter" },
  { href: "/example-url", icon: FaInstagram, name: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-footer-background py-12 text-secondary px-5">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 px-2 md:px-10">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm">
              We are a company dedicated to providing excellent services and
              products to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigate</h3>
            <ul className="space-y-2">
              {navigate.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm">123 Main St, Anytown, USA 12345</p>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary transition-colors hover:text-primary"
                >
                  <link.icon size={24} />
                  <span className="sr-only">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-secondary-foreground/10 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} AafnoInk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}