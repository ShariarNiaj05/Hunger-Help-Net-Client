
import {motion} from "framer-motion"
const Banner = () => {
    return (
        <div className=" text-red-600 text-6xl ">
            <motion.h2 animate={{fontSize: 50, x:100,}}>
                banner motion
           </motion.h2>
        </div>
    );
};

export default Banner;