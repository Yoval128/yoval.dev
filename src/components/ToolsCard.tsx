import { motion } from 'motion/react';
import type { ToolsType } from "@/types";
import { fadeUp } from "@/lib/animations.ts";

const ToolsCard = ({ tool }: { tool: ToolsType }) => {
    const { Icon, label, color } = tool;

    return (
        <motion.div
            variants={fadeUp}
            className="border border-neutral-700 rounded-md
            flex justify-center items-center flex-col py-4"
        >
            <Icon size={32} color={color} />

            <p className='font-bold mt-2'>{label}</p>
        </motion.div>
    );
};

export default ToolsCard;