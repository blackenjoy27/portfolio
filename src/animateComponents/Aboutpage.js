import React from "react";
import {motion} from "framer-motion";


const Aboutpage = ()=>{
    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>
            Homepage
        </motion.div>
    )
}

export default Aboutpage;