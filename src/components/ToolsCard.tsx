import { motion } from 'motion/react';
import type { ToolsType } from "@/types";
import { fadeUp } from "@/lib/animations.ts";

const ToolsCard = ({ tool }: { tool: ToolsType }) => {
    const { Icon, label, color } = tool;

    return (
        <motion.div
            variants={fadeUp}
            className="border border-border
                rounded-md
                flex flex-col items-center justify-center
                py-4
                bg-card
                hover:bg-accent/30
                transition">
            <Icon size={32} color={color} />

            <p className='font-semibold mt-2 text-foreground'>{label}</p>
        </motion.div>
    );
};

export default ToolsCard;