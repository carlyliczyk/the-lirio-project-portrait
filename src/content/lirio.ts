import banner from "@/assets/lirio/lirio-banner.asset.json";
import logo from "@/assets/lirio/lirio-thelirio.asset.json";
import home from "@/assets/lirio/lirio-home.asset.json";
import homepage from "@/assets/lirio/lirio-homepage.asset.json";
import shopPage from "@/assets/lirio/lirio-shop-page.asset.json";
import productPage from "@/assets/lirio/lirio-product-page.asset.json";
import contactPage from "@/assets/lirio/lirio-contact-page.asset.json";
import cartPage from "@/assets/lirio/lirio-shopping-bag.asset.json";
import process from "@/assets/lirio/lirio-ux-design-process.asset.json";
import sitemap from "@/assets/lirio/lirio-ux-sitemap.asset.json";
import type01 from "@/assets/lirio/lirio-type-01.asset.json";
import type02 from "@/assets/lirio/lirio-type-02.asset.json";
import buttonStates from "@/assets/lirio/lirio-ui-button-states.asset.json";
import buttonTypes from "@/assets/lirio/lirio-ui-button-types.asset.json";
import inputs from "@/assets/lirio/lirio-ui-inputs.asset.json";
import forms from "@/assets/lirio/lirio-ui-forms.asset.json";
import forms2 from "@/assets/lirio/lirio-ui-forms-2.asset.json";
import gridDesktop from "@/assets/lirio/lirio-ui-grid-desktop.asset.json";
import gridMobile from "@/assets/lirio/lirio-ui-grid-mobile.asset.json";
import figma from "@/assets/lirio/lirio-figma-icon.asset.json";
import wordpress from "@/assets/lirio/lirio-wordpress-icon.asset.json";
import illustrator from "@/assets/lirio/lirio-illustrator-icon.asset.json";
import photoshop from "@/assets/lirio/lirio-photoshop-icon.asset.json";
import klaviyo from "@/assets/lirio/lirio-klaviyo-icon.asset.json";

export const images = {
  banner: banner.url,
  logo: logo.url,
  home: home.url,
  process: process.url,
  sitemap: sitemap.url,
  type01: type01.url,
  type02: type02.url,
  gridDesktop: gridDesktop.url,
  gridMobile: gridMobile.url,
};

export const project = {
  name: "The Lirio",
  intro:
    "The Lirio is a modern jewelry brand focused on minimal, timeless design. Blending everyday wearability with refined craftsmanship, the brand creates elegant pieces using high-quality materials, designed to elevate personal style with subtle luxury.",
  overview:
    "This project focused on redesigning a custom eCommerce website built on WordPress, using the XStore theme and a flexible stack including Elementor, FunnelKit, and Klaviyo. The goal was to elevate the brand through a minimalistic and luxurious visual direction while improving usability and conversion performance. Small, refined details, such as custom icons, product swatches, and thoughtful micro-interactions were introduced to create a polished, high-end user experience. The result is a streamlined shopping journey that balances aesthetic sophistication with functional clarity.",
  meta: [
    { label: "Client", value: "The Lirio" },
    { label: "Services", value: "UI/UX · Web Development" },
    { label: "Date", value: "2024–2025" },
    { label: "Website", value: "thelirio.com", href: "https://thelirio.com/" },
  ],
  tools: [
    { name: "Figma", icon: figma.url },
    { name: "WordPress", icon: wordpress.url },
    { name: "Illustrator", icon: illustrator.url },
    { name: "Photoshop", icon: photoshop.url },
    { name: "Klaviyo", icon: klaviyo.url },
  ],
};

export const scope = [
  {
    title: "UX Research & Strategy",
    body: "Conducted user research to identify key needs, behaviors, and friction points. Developed user personas, empathy maps, and journey flows to guide design decisions and ensure alignment with business and user goals.",
  },
  {
    title: "Information Architecture & User Flows",
    body: "Structured the site’s navigation and product hierarchy through card sorting and user flow mapping, creating an intuitive browsing experience that supports product discovery and conversion.",
  },
  {
    title: "Wireframing & Visual Design",
    body: "Designed low- to high-fidelity wireframes focused on clarity and hierarchy, followed by a refined visual system emphasizing minimalism, luxury aesthetics, and consistent UI elements.",
  },
  {
    title: "Front-End Development",
    body: "Built a fully responsive interface using Elementor, implementing custom layouts and components while maintaining performance and scalability across devices.",
  },
  {
    title: "WordPress Customization",
    body: "Extended functionality through a child theme and WordPress hooks, enabling tailored modifications across key templates such as product, archive, and cart pages without compromising core theme integrity.",
  },
  {
    title: "eCommerce Optimization",
    body: "Customized critical eCommerce touchpoints, including product pages (pricing, size selection, charts), archive listings, and cart/checkout flows to improve usability and drive conversions.",
  },
  {
    title: "Marketing & Funnel Integration",
    body: "Integrated FunnelKit and Klaviyo to support conversion funnels, email automation, and customer retention strategies, aligning the design with marketing performance goals.",
  },
  {
    title: "Testing & Launch",
    body: "Conducted user testing to validate design decisions, iterated based on feedback, and supported a smooth launch with performance and usability optimizations.",
  },
];

export const processCopy =
  "A structured, user-centered process spanning discovery to delivery. Starting with research and empathy mapping to define key problems, the project moves into sitemap creation and user flows to shape the experience. This is followed by wireframing and building a cohesive UI design system, then full development, user testing, and iterative improvements to ensure a seamless, high-performing final product.";

export const problemsSolutions = [
  {
    problem: "Confusing navigation",
    problemBody:
      "Customers were struggling to find products due to the organization and a complicated site layout.",
    solution: "Intuitive Navigation & Layout",
    solutionBody:
      "Created a modern and user-friendly navigation and website layout that displays important features immediately, like the products and services The Lirio provides.",
  },
  {
    problem: "Slow load times",
    problemBody: "The website was slow to load, leading to frustrated users and abandoned carts.",
    solution: "Performance-Optimized Experience",
    solutionBody: "Optimized the website for quick loading times, prioritizing the mobile experience.",
  },
  {
    problem: "Lack of brand identity",
    problemBody:
      "The site did not reflect a modern luxury brand, leaving visitors unclear of its luxurious offerings and trustworthy services.",
    solution: "Elevated Luxury Visual Design",
    solutionBody:
      "Elevated The Lirio’s brand image with a minimalistic, luxurious website and close attention to small details like icon types, typography and imagery.",
  },
  {
    problem: "Weak mobile experience",
    problemBody:
      "The site was not optimized for mobile, making it difficult for customers to shop when it’s convenient.",
    solution: "Mobile-First Design Approach",
    solutionBody:
      "Designed mobile-first, ensuring the brand’s image and products display beautifully on any device.",
  },
];

export const competitive = {
  brands: ["Tiffany’s", "Cartier", "Bulgari"],
  findings: [
    "Competitor analysis revealed that most brands prioritize strong visual storytelling through large product imagery, lifestyle photography, and video hero banners to immediately capture attention. Clean grid-based layouts and elegant typography are consistently used to reinforce a premium feel, while features like currency selection and clear navigation are considered standard across all sites.",
    "However, gaps exist in areas that impact conversion. Not all competitors highlight pricing effectively, and key conversion tools, such as chat support and high-jewelry inquiry forms, are inconsistently implemented. Additionally, while many sites perform well visually, fewer incorporate distinctive product page experiences or micro-interactions that elevate the brand.",
    "This presents an opportunity to differentiate by combining high-end visual design with stronger conversion-focused features, such as clearer pricing hierarchy, enhanced product detail interactions, and integrated support tools, to create a more seamless and premium user experience.",
  ],
  columns: ["The Lirio", "Cartier", "Tiffany’s", "Bulgari"],
  rows: [
    { feature: "Large photos highlighting products", scores: [10, 7, 7, 8] },
    { feature: "Large filler photos showcasing brand & collections", scores: [7, 9, 8, 10] },
    { feature: "Video hero banners on homepage", scores: [10, 0, 8, 10] },
    { feature: "Modern design with clear grid structure", scores: [10, 10, 9, 8] },
    { feature: "Elegant font and icons", scores: [8, 10, 9, 8] },
    { feature: "Book appointment page highlighted in menu", scores: [10, 7, 10, 9] },
    { feature: "High jewelry request forms", scores: [10, 10, 0, 10] },
    { feature: "Original product & shop card design", scores: [9, 10, 9, 6] },
    { feature: "Currency or region selection", scores: [10, 10, 10, 10] },
    { feature: "Product price not over-emphasized", scores: [10, 9, 10, 8] },
    { feature: "Chat feature", scores: [0, 10, 10, 0] },
  ],
};

export const empathy = [
  {
    title: "Think & Feel",
    items: [
      "Customers value timeless, high-quality craftsmanship. They expect products that reflect lasting value, not just fashion trends.",
      "Customers feel frustrated when the online experience doesn’t match the high-end quality of the product. They want the same sophistication in the website and customer service as in their jewelry.",
      "Customers expect exclusivity and attention to detail. They feel excited when the website makes them feel valued and part of something elite.",
    ],
  },
  {
    title: "Hear",
    items: [
      "Word-of-mouth recommendations are powerful. Customers often hear praise for the premium craftsmanship and unique design, building their desire to purchase.",
      "Customers hear consistent messaging about the brand’s commitment to creating luxury jewelry that does not compare to other products.",
    ],
  },
  {
    title: "See",
    items: [
      "Customers notice the sophisticated and refined design of The Lirio’s jewelry.",
      "Customers observe attention to detail in craftsmanship, making each product feel exclusive and high-end.",
    ],
  },
  {
    title: "Say & Do",
    items: [
      "Say: “I want a bracelet that combines luxury and exclusivity.”",
      "Do: Research a piece that is not readily available to purchase online, and contact the brand to inquire about price and wait time.",
    ],
  },
];

export const styles = {
  intro:
    "Inclusive design is at the forefront of The Lirio’s UI/UX. It’s important for the interface to enhance the user’s experience and be accessible to all users, regardless of their abilities, disabilities, or other characteristics.",
  colours: [
    { name: "Lirio Gold", hex: "#D4AF37", swatch: "bg-gold", text: "text-ink" },
    { name: "Ivory", hex: "#F6F3EB", swatch: "bg-ivory", text: "text-ink" },
    { name: "Onyx", hex: "#000000", swatch: "bg-ink", text: "text-ink-foreground" },
  ],
};

export const uiElements = {
  intro:
    "A minimal, luxury-focused interface built on clean typography, spacing, and subtle detail. Refined elements like icons, swatches, and micro-interactions guide attention, reduce friction, and support a seamless, conversion-focused experience across all devices.",
  items: [
    { title: "Button States", src: buttonStates.url },
    { title: "Button Types", src: buttonTypes.url },
    { title: "Product Inputs", src: inputs.url },
    { title: "Form Inputs", src: forms.url },
    { title: "Form Text Labels", src: forms2.url, wide: true },
  ],
};

export const screens = [
  {
    title: "Homepage",
    src: homepage.url,
    body: [
      "A visually striking introduction to the brand with a featured collection, unique selling points, best sellers and services like booking a designer consultation.",
    ],
    features: [] as string[],
  },
  {
    title: "Shop Page",
    src: shopPage.url,
    body: [
      "Clean, grid-based layout with consistent imagery and elegant typography creates a seamless, on-brand shopping experience.",
      "Clear calls-to-action and intuitive add-to-cart options make browsing and purchasing effortless, encouraging user engagement and conversion.",
    ],
    features: ["Custom Product Card Design", "Add to Cart Hover Treatments"],
  },
  {
    title: "Product Page",
    src: productPage.url,
    body: [
      "Large, high-quality imagery and refined typography create a clean, premium experience.",
      "The design highlights product features over price, reinforcing brand value and user trust.",
    ],
    features: ["Custom Add to Cart Buttons", "Off-Canvas Menus"],
  },
  {
    title: "Contact Page",
    src: contactPage.url,
    body: [
      "Where we are, a contact form and fit guidance gathered in one calm, approachable page that keeps customers close to the brand.",
    ],
    features: [] as string[],
  },
  {
    title: "Cart & Checkout",
    src: cartPage.url,
    body: [
      "Custom checkout with a clear order summary, featuring coupon code input, a sticky checkout button, and Buy Now, Pay Later. This approach streamlines the user experience and boosts conversions.",
    ],
    features: ["Custom Order Summary Layout", "Sticky Checkout Button"],
    short: true,
  },
];

export const sections = [
  { id: "overview", label: "Overview" },
  { id: "ux", label: "User Experience" },
  { id: "system", label: "Design System" },
  { id: "visual", label: "Visual Design" },
];
