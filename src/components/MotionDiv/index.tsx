import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";
import motionVariants from "../../utils/motion";

interface IMotionDiv {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const MotionDiv = ({ className, children, style }: IMotionDiv) => {
    const control = useAnimation();
    const [ref, inView] = useInView()
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);


    return (
        <motion.div
            className={className}
            style={style}
            ref={ref}
            transition={{ type: "tween", duration: 0.5 }}
            initial="hidden"
            animate={control}
            variants={motionVariants}>
            {children}
        </motion.div>
    )
}

export default MotionDiv