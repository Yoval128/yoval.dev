import {motion} from "motion/react"
import {staggerContainer} from "@/lib/animations.ts";
const Stats =()=>{
    return (
       <motion.section
       initial="hidden"
       whileInView='visible'
       viewport={{once:true, amount: 0.8}}
       variants={staggerContainer(0.6)}
       className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
       gap-10 mt-20'
       >

       </motion.section>
    )
};

export default Stats;