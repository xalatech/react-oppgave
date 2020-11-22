import '../styles/globals.css'
import { motion } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <motion.div>
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp
