import { motion } from "framer-motion";

const ScrollSection = ({ children, animation, className }) => {
  const defaultAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 1, // Reduce the duration for a quicker effect
        ease: [0.42, 0, 0.58, 1], // Use a custom cubic bezier for smoothness
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={animation || defaultAnimation}
    >
      {children}
    </motion.div>
  );
};

export default ScrollSection;
