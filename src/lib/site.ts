

import type { LucideIcon } from "lucide-react";
import { Check, Tv, Zap, Server, Rabbit, Star, ShieldCheck } from "lucide-react";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features" },
  { name: "Free Trial", href: "/free-trial" },
  { name: "Pricing", href: "/pricing" },
  { name: "Devices", href: "/devices" },
];

export const features = [
  {
    name: "Instant Activation",
    description: "Get your IPTV service subscription up and running in minutes. No waiting, just entertainment.",
    icon: Zap,
  },
  {
    name: "All Devices",
    description: "Our IPTV service is compatible with all your favorite devices, from smart TVs to mobile phones.",
    icon: Tv,
  },
  {
    name: "Zero Effort",
    description: "Our IPTV service's intuitive setup process means you'll be watching in no time, hassle-free.",
    icon: Rabbit,
  },
  {
    name: "Stable Server",
    description: "Enjoy uninterrupted streaming with our powerful and reliable IPTV service server infrastructure.",
    icon: Server,
  },
  {
    name: "Fast Install",
    description: "Quick and easy installation guides for our IPTV service on every device to get you started.",
    icon: ShieldCheck,
  },
  {
    name: "Super Quality",
    description: "Experience your favorite shows and movies in stunning HD and 4K quality with our IPTV service.",
    icon: Star,
  },
];

export const devices: { name: string; icon: string; href: string; }[] = [
    { name: 'iPhone', icon: 'SiIphone', href: '/guides/iphone' },
    { name: 'iPad', icon: 'SiIpad', href: '/guides/ipad' },
    { name: 'macOS', icon: 'SiMacos', href: '/guides/macos' },
    { name: 'Android', icon: 'SiAndroid', href: '/guides/android' },
    { name: 'Windows', icon: 'SiWindows', href: '/guides/windows' },
    { name: 'Roku', icon: 'SiRoku', href: '/guides/roku' },
    { name: 'Samsung TV', icon: 'SiSamsung', href: '/guides/smart-tv' },
    { name: 'LG TV', icon: 'SiLg', href: '/guides/smart-tv' },
    { name: 'Fire TV', icon: 'SiAmazonfiretv', href: '/guides/fire-tv' },
    { name: 'MAG', icon: 'Tv', href: '/guides/mag' },
    { name: 'Apple TV', icon: 'SiAppletv', href: '/guides/apple-tv' }
];

export const plans = [
  {
    id: "1-month",
    name: "1 Month",
    duration: "1 month",
    price: 14.99,
    price_monthly: 14.99,
    savings: null,
    features: [
      "7000+ Live Channels",
      "40000+ VOD Movies",
      "1500+ TV Shows",
      "HD & SD Quality",
      "24/7 Support",
    ],
    isPopular: false,
    url: "/pricing/1-month",
  },
  {
    id: "3-months",
    name: "3 Months",
    duration: "3 months",
    price: 24.99,
    price_monthly: 8.33,
    savings: "Save $20",
    features: [
      "7000+ Live Channels",
      "40000+ VOD Movies",
      "1500+ TV Shows",
      "HD & SD Quality",
      "24/7 Support",
      "3 Connections",
    ],
    isPopular: false,
    url: "/pricing/3-months",
  },
  {
    id: "6-months",
    name: "6 Months",
    duration: "6 months",
    price: 39.99,
    price_monthly: 6.66,
    savings: "Save $50",
    features: [
      "7000+ Live Channels",
      "40000+ VOD Movies",
      "1500+ TV Shows",
      "HD & SD Quality",
      "24/7 Support",
      "3 Connections",
      "PPV Events",
    ],
    isPopular: true,
    url: "/pricing/6-months",
  },
  {
    id: "12-months",
    name: "12 Months",
    duration: "12 months",
    price: 59.99,
    price_monthly: 5.0,
    savings: "Save $120",
    features: [
      "7000+ Live Channels",
      "40000+ VOD Movies",
      "1500+ TV Shows",
      "HD & SD Quality",
      "24/7 Support",
      "4 Connections",
      "PPV Events",
      "Premium Support",
    ],
    isPopular: false,
    url: "/pricing/12-months",
  },
];

export const faqs = [
    {
        question: "Do you offer free trials for your IPTV service?",
        answer: "Currently, we do not offer free trials for our IPTV service due to high demand. However, we have affordable 1-month packages, which are perfect for testing our service. This approach helps us maintain high-quality streams for our paid subscribers."
    },
    {
        question: "How many devices can I use with one IPTV service subscription?",
        answer: "Our standard IPTV service plan allows for one connection at a time. This ensures stable and high-quality streaming. If you require multiple simultaneous connections for your family, please contact our support for a custom IPTV plan."
    },
    {
        question: "Why is my IPTV service buffering?",
        answer: "Buffering can be caused by several factors. The most common are slow internet speed, ISP throttling, or issues with your device. For a smooth IPTV service experience, we recommend a stable internet connection of at least 25 Mbps and using a reliable VPN to prevent ISP throttling."
    },
    {
        question: "How long does IPTV service activation take?",
        answer: "Activation for your IPTV service is instant. As soon as your payment is successfully processed, your login credentials and setup instructions will be sent to your email address immediately. You can start streaming within minutes."
    },
    {
        question: "Do I need a VPN to use the IPTV service?",
        answer: "A VPN is not strictly required, but it is highly recommended for the best IPTV service experience. A VPN protects your online privacy, helps bypass any ISP restrictions or throttling, and can unlock geo-restricted content, giving you more freedom."
    },
    {
        question: "What is your refund policy for the IPTV service?",
        answer: "We are confident in our IPTV service and offer a 7-day money-back guarantee. If you are not completely satisfied within the first week, contact our support team to request a full refund, no questions asked."
    },
    {
        question: "What apps does your IPTV service support?",
        answer: "Our flexible IPTV service supports a wide range of popular applications, including IPTV Smarters, TiviMate, GSE Smart IPTV, OTT Navigator, and many others. We provide easy-to-follow setup guides for all major apps and devices."
    },
    {
        question: "Do you provide channel updates for the IPTV service?",
        answer: "Yes, our IPTV service channel list is updated automatically and regularly at no extra cost. This ensures you always have access to the latest channels, movies, and series without any manual intervention."
    },
    {
        question: "How can I get support for my IPTV service?",
        answer: "We offer 24/7 customer support for our IPTV service. You can reach our dedicated team via our contact form, email, or live chat. We are always ready to assist you with any setup, billing, or technical issues."
    },
    {
        question: "Can I cancel my IPTV service subscription anytime?",
        answer: "Absolutely. You can cancel your IPTV service subscription at any time. We believe in flexibility, so there are no long-term contracts. Simply contact our support team, and they will process the cancellation for you."
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
        message: "The setup was surprisingly easy on my Firestick. I was watching my favorite shows in less than 5 minutes. The 24/7 support for this IPTV service is also a huge plus!"
    },
    {
        name: "Mike P.",
        initials: "MP",
        rating: 5,
        message: "I was skeptical about the 'no buffering' claim, but this IPTV service delivered. Rock-solid stability even during major sports events. Highly recommend."
    },
    {
        name: "Emily R.",
        initials: "ER",
        rating: 5,
        message: "Amazing value for money. The 12-month IPTV service plan is a steal for this level of quality. It works flawlessly on all my devices."
    }
];

export const posts: {
  id: string;
  title: string;
  image: string;
  excerpt: string;
  tags: string[];
  href: string;
  content?: string;
}[] = [];


export const footerLinks = {
    quickLinks: [
        { name: "Pricing", href: "/pricing" },
        { name: "Affiliate Program", href: "#" },
    ],
    supportedLinks: [
        { name: "Android App", href: "/guides/android" },
        { name: "iOS App", href: "/guides/iphone" },
        { name: "Windows App", href: "/guides/windows" },
        { name: "macOS App", href: "/guides/macos" },
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


export const brands = [
    { id: "brand_item21", alt: "brand_item21", imageHint: "brand logo" },
    { id: "brand_item22", alt: "brand_item22", imageHint: "brand logo" },
    { id: "brand_item14", alt: "brand_item14", imageHint: "brand logo" },
    { id: "brand_item13", alt: "brand_item13", imageHint: "brand logo" },
    { id: "brand_item12", alt: "brand_item12", imageHint: "brand logo" },
    { id: "brand_item18", alt: "brand_item18", imageHint: "brand logo" },
    { id: "brand_item17", alt: "brand_item17", imageHint: "brand logo" },
    { id: "brand_item15", alt: "brand_item15", imageHint: "brand logo" },
    { id: "brand_item16", alt: "brand_item16", imageHint: "brand logo" },
];

export const brands_two = [
    { id: "brand_item10", alt: "brand_item10", imageHint: "brand logo" },
    { id: "brand_item11", alt: "brand_item11", imageHint: "brand logo" },
    { id: "brand_item08", alt: "brand_item08", imageHint: "brand logo" },
    { id: "brand_item09", alt: "brand_item09", imageHint: "brand logo" },
    { id: "brand_item06", alt: "brand_item06", imageHint: "brand logo" },
    { id: "brand_item05", alt: "brand_item05", imageHint: "brand logo" },
]



    