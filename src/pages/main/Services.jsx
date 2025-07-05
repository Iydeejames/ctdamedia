import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "../../assets/images/services-page/img1.png"; // Hero image

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const services = [
  {
    title: "Media Reviews & Critiques",
    headline: "Fearless Reviews That Shape Culture",
    description:
      "At CTDA Media, we don’t just review, we analyze and amplify. Whether you’re a filmmaker, musician, or creative brand, our detailed critiques help you stand out in a crowded market and connect with your audience.",
    features: [
      "Film and music reviews",
      "Digital campaign critiques",
      "Brand storytelling assessments",
    ],
    pricing: [
      { label: "Nigeria", price: "$50 USD per review" },
      { label: "US & International", price: "$150 USD per review" },
    ],
    cta: "Request Your Review",
    link: "/contact",
  },
  {
    title: "Sponsored Content & Creative Features",
    headline: "Your Story. Our Platform. Maximum Impact.",
    description:
      "Put your brand in front of an audience hungry for culture, creativity, and authentic voices. CTDA Media offers sponsored articles, video interviews, and digital storytelling that resonates across Africa and the diaspora.",
    features: [
      "Sponsored articles or blog features",
      "Video interviews or spotlight pieces",
      "Social media promotions",
    ],
    pricing: [
      { label: "Nigeria", price: "From $200 USD" },
      { label: "US & International", price: "From $500 USD" },
    ],
    cta: "Book Your Feature",
    link: "/contact",
  },
  {
    title: "Digital Workshops & Webinars",
    headline: "Turn Your Voice Into Influence, and Income",
    description:
      "Join CTDA Media’s exclusive webinars designed for creators, brands, and cultural entrepreneurs. Learn how to monetize your opinions, build your digital presence, and create media that makes waves.",
    features: [
      "Monetizing Opinions for Creators",
      "Digital Media Strategy for Brands",
      "Personal Branding for Cultural Influencers",
    ],
    pricing: [
      { label: "Nigeria", price: "$10–$20 USD" },
      { label: "US & International", price: "$50–$100 USD" },
    ],
    cta: "Reserve Your Spot",
    link: "/contact",
  },
  {
    title: "Consulting & Strategy Sessions",
    headline: "Media Strategy Tailored to You",
    description:
      "Need expert insights into African media trends or diaspora audiences? CTDA Media offers one-on-one consulting sessions to help you build influence, craft your message, and grow your brand.",
    features: [
      "Personal brand audits",
      "Campaign strategy",
      "Cultural market insights",
    ],
    pricing: [
      { label: "Nigeria", price: "$30–$50/hr" },
      { label: "US & International", price: "$150–$300/hr" },
    ],
    cta: "Book a Session",
    link: "/contact",
  },
  {
    title: "Advertising & Sponsored Posts",
    headline: "Amplify Your Brand with CTDA Media",
    description:
      "Reach an engaged audience across CTDA Media’s platforms. Whether you’re launching a new product or driving event buzz, our sponsored posts help you connect with culturally conscious consumers.",
    features: [
      "Sponsored blog posts",
      "Newsletter placements",
      "Social media shout-outs",
    ],
    pricing: [
      { label: "Nigeria", price: "From $50 USD per post" },
      { label: "US & International", price: "From $200 USD per post" },
    ],
    cta: "Start Advertising",
    link: "/contact",
  },
  {
    title: "Digital Products & Downloads",
    headline: "Your DIY Media Toolbox",
    description:
      "Power up your media journey with CTDA’s digital products. Perfect for creators and brands who want to learn at their own pace.",
    features: [
      "Media Critique Templates",
      "Social Media Strategy Guides",
      "Cultural Trend Reports",
    ],
    pricing: [
      { label: "Nigeria", price: "$5–$10 USD" },
      { label: "US & International", price: "$20–$50 USD" },
    ],
    cta: "Browse Products",
    link: "/products",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Hero Section */}
      <div className="relative text-white">
        {/* Mobile View */}
        <div className="md:hidden relative h-72 w-full">
          <img
            src={img1}
            alt="Services Hero Mobile"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900 to-transparent" />
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
          >
            <h1 className="text-3xl font-bold mb-2">Our Services</h1>
            <p className="text-base font-semibold">
              Tailored media solutions to amplify your voice and impact.
            </p>
          </motion.div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex bg-gradient-to-r from-green-800 via-green-600 to-white h-72 items-center px-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-1/2 text-white"
          >
            <h1 className="text-4xl font-extrabold mb-2">Services We Offer</h1>
            <p className="text-base leading-snug">
              From media critiques to branded content, CTDA Media helps you stand out, connect, and grow.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services List */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-16">

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white shadow-sm rounded-xl p-6 md:p-10 border border-gray-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.headline}
              </h3>
              <p className="text-gray-700 text-sm md:text-base mb-4">
                {service.description}
              </p>

              <ul className="list-disc list-inside text-gray-700 text-sm md:text-base mb-4 space-y-1">
                {service.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>

              <div className="bg-green-700 text-white rounded-sm p-4 mb-4">
                <p className="text-sm font-semibold mb-2">Pricing:</p>
                <ul className="text-sm space-y-1">
                  {service.pricing.map((price, idx) => (
                    <li key={idx}>
                      <strong>{price.label}:</strong> {price.price}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to={service.link}
                className="inline-block mt-2 bg-red-800 text-white text-sm md:text-base font-medium px-5 py-2 rounded-md hover:bg-gray-900 transition"
              >
                {service.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center space-y-5">
          <h3 className="text-md md:text-lg font-semibold text-gray-800">
            Need Help Getting Started?
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {[
              { label: "Subscribe for Weekly Insights", to: "/subscribe" },
              { label: "Book Your Strategy Call", to: "/contact" },
              { label: "Join Our Next Webinar", to: "/webinars" },
              { label: "Get Featured on CTDA Media", to: "/contact" },
            ].map((btn, i) => (
              <Link
                key={i}
                to={btn.to}
                className="w-[220px] text-center bg-gray-800 text-white px-4 py-2 rounded-md text-xs md:text-sm hover:bg-gray-600 transition"
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
