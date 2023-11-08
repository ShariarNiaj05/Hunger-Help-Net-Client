import { motion } from "framer-motion";
const WhyChooseUs = () => {
  return (
      <div className=" max-w-6xl mx-auto ">
          <h2 className=" text-6xl font-bold text-blue-600 text-center my-10">Why Choose Us</h2>
          <div className=" max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
              <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
        className="hero max-h-96"
        style={{
          backgroundImage:
            "url(https://nationaltoday.com/wp-content/uploads/2022/07/National-Food-Bank-Day-1200x834.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Quality Service</h1>
            <p className="mb-5">
            We are committed to providing top-notch service to our customers. Our team is dedicated to ensuring that you receive the best possible experience when you choose our services. From the moment you engage with us, expect nothing but quality and excellence.
            </p>
            
          </div>
        </div>
      </motion.div>
              <motion.div
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
        className="hero max-h-96"
        style={{
          backgroundImage:
            "url(https://bishopsstortfordfoodbank.com/wp-content/uploads/2021/11/food-box-1024x576.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Community Impact</h1>
            <p className="mb-5">
            Beyond our commitment to quality, we take pride in our positive impact on the community. We believe in giving back and supporting the communities we serve. When you choose us, you're not only choosing a service provider; you're also contributing to the betterment of our local community
            </p>
            
          </div>
        </div>
      </motion.div>
    </div>
    </div>
  );
};

export default WhyChooseUs;
