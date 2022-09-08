const motionVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: 100, opacity: 0 },
}

export const MotionNavigation = {
    visible: { x: 0, opacity: 1, transition: { delay: 0, duration: 0.5 } },
    hidden: { x: '-100%', opacity: 0 },
}

export const MotionNavigationMobile = {
    visible: { y: 0, opacity: 1, transition: { delay: 0, duration: 0.5 } },
    hidden: { y: '-100%', opacity: 0 },
}

export default motionVariants;