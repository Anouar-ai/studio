import type { LucideIcon } from "lucide-react";
import { Check, Tv, Zap, Server, Rabbit, Star, ShieldCheck } from "lucide-react";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Devices", href: "#devices" },
  { name: "Blog", href: "/blog" },
  { name: "Affiliate", href: "#" },
];

export const features = [
  {
    name: "Instant Activation",
    description: "Get your IPTV service up and running in minutes. No waiting, just entertainment.",
    icon: Zap,
  },
  {
    name: "All Devices",
    description: "Compatible with all your favorite devices, from smart TVs to mobile phones.",
    icon: Tv,
  },
  {
    name: "Zero Effort",
    description: "Our intuitive setup process means you'll be watching in no time, hassle-free.",
    icon: Rabbit,
  },
  {
    name: "Stable Server",
    description: "Enjoy uninterrupted streaming with our powerful and reliable server infrastructure.",
    icon: Server,
  },
  {
    name: "Fast Install",
    description: "Quick and easy installation guides for every device to get you started.",
    icon: ShieldCheck,
  },
  {
    name: "Super Quality",
    description: "Experience your favorite shows and movies in stunning HD and 4K quality.",
    icon: Star,
  },
];

export const devices: { name: string, icon: string }[] = [
    { name: 'iPhone', icon: 'SiIos' },
    { name: 'iPad', icon: 'SiIos' },
    { name: 'macOS', icon: 'SiMacos' },
    { name: 'Android', icon: 'SiAndroid' },
    { name: 'Windows', icon: 'Tv' },
    { name: 'Roku', icon: 'SiRoku' },
    { name: 'Samsung TV', icon: 'SiSamsung' },
    { name: 'LG TV', icon: 'SiLg' },
    { name: 'Fire TV', icon: 'SiAmazonfiretv' },
    { name: 'MAG', icon: 'Tv' },
    { name: 'Apple TV', icon: 'SiAppletv' }
];

export const plans = [
  {
    name: "1 Month",
    price: 16,
    price_monthly: 16,
    features: ["HD/4K Quality", "24/7 Support", "20,000+ Channels", "Instant Activation", "Anti-Freeze Tech"],
    isPopular: false,
  },
  {
    name: "3 Months",
    price: 30,
    price_monthly: 10,
    features: ["HD/4K Quality", "24/7 Support", "20,000+ Channels", "Instant Activation", "Anti-Freeze Tech"],
    isPopular: false,
  },
  {
    name: "12 Months",
    price: 90,
    price_monthly: 7.5,
    features: ["HD/4K Quality", "24/7 Support", "20,000+ Channels", "Instant Activation", "Anti-Freeze Tech"],
    isPopular: true,
  },
  {
    name: "6 Months",
    price: 50,
    price_monthly: 8.33,
    features: ["HD/4K Quality", "24/7 Support", "20,000+ Channels", "Instant Activation", "Anti-Freeze Tech"],
    isPopular: false,
  },
];

export const faqs = [
    {
        question: "Do you offer free trials?",
        answer: "Currently, we do not offer free trials due to the nature of the service. However, we offer affordable 1-month packages so you can test our service with minimal investment."
    },
    {
        question: "How many devices can I use with one subscription?",
        answer: "Our standard plan allows for one connection at a time. If you need to watch on multiple devices simultaneously, please contact our support for a custom plan."
    },
    {
        question: "Why is my service buffering?",
        answer: "Buffering can be caused by several factors, including slow internet speed, ISP throttling, or issues with your device. We recommend a stable internet connection of at least 25 Mbps and using a VPN if your ISP is throttling your connection."
    },
    {
        question: "How long does activation take?",
        answer: "Activation is instant. Once your payment is confirmed, your service details will be sent to your email address immediately."
    },
    {
        question: "Do I need a VPN to use the service?",
        answer: "A VPN is not always required, but it is highly recommended. A VPN can help bypass ISP throttling, protect your privacy, and access geo-restricted content."
    },
    {
        question: "What is your refund policy?",
        answer: "We offer a 3-day money-back guarantee if you are not satisfied with our service. Please contact our support team to request a refund."
    },
    {
        question: "What apps do you support?",
        answer: "We support a wide range of IPTV apps, including IPTV Smarters, TiviMate, OTT Navigator, and many others. We provide setup guides for all major apps."
    },
    {
        question: "Do you provide channel updates?",
        answer: "Yes, our channel list is updated regularly to ensure you have access to the latest content and the most stable streams available."
    },
    {
        question: "How can I get support?",
        answer: "We offer 24/7 customer support via our contact form, email, and live chat. Our team is always ready to assist you with any issues."
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts. Simply contact our support team to process the cancellation."
    }
];

export const testimonials = [
    {
        name: "John D.",
        initials: "JD",
        rating: 5,
        message: "Blown away by the quality and channel selection. The 4K streams are crystal clear. Best IPTV service I've ever used, hands down."
    },
    {
        name: "Sarah L.",
        initials: "SL",
        rating: 5,
        message: "The setup was surprisingly easy on my Firestick. I was watching my favorite shows in less than 5 minutes. The 24/7 support is also a huge plus!"
    },
    {
        name: "Mike P.",
        initials: "MP",
        rating: 5,
        message: "I was skeptical about the 'no buffering' claim, but they delivered. Rock-solid stability even during major sports events. Highly recommend."
    },
    {
        name: "Emily R.",
        initials: "ER",
        rating: 5,
        message: "Amazing value for money. The 12-month plan is a steal for this level of service. It works flawlessly on all my devices."
    }
];

export const posts = [
    {
        id: "install-iptv-on-macbook",
        title: "How to Install IPTV on Macbook",
        image: "blog-macbook",
        excerpt: "Learn the simple steps to set up and enjoy our IPTV service on your macOS device for a seamless streaming experience.",
        tags: ["Tutorial", "macOS"],
        href: "#"
    },
    {
        id: "install-smart-iptv-on-firestick",
        title: "How to Install Smart IPTV on Firestick",
        image: "blog-firestick",
        excerpt: "A step-by-step guide to installing and configuring your IPTV subscription on an Amazon Firestick or Fire TV.",
        tags: ["Guide", "Firestick"],
        href: "#"
    },
    {
        id: "install-ott-navigator-iptv-player",
        title: "Install OTT Navigator IPTV Player",
        image: "blog-ott-navigator",
        excerpt: "Discover the features of OTT Navigator and how to install it on your Android device for an enhanced IPTV experience.",
        tags: ["How-To", "Android"],
        href: "#"
    }
];

export const footerLinks = {
    quickLinks: [
        { name: "Pricing", href: "/pricing" },
        { name: "FAQ", href: "/faq" },
        { name: "Blog", href: "/blog" },
        { name: "Affiliate Program", href: "#" },
    ],
    supportedLinks: [
        { name: "Android App", href: "#" },
        { name: "iOS App", href: "#" },
        { name: "Windows App", href: "#" },
        { name: "macOS App", href: "#" },
    ],
    contact: {
        address: "123 Digital Street, Lizard City, LC 12345",
        email: "support@iptvservice.com"
    }
};

export const socialIcons = [
    { name: "Facebook", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
];
