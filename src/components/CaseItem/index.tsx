import { FC } from "react"
import { Link } from "react-router-dom"
import MotionDiv from "../MotionDiv"
import STYLE from './caseItem.module.scss'
type Props = {}

interface ICaseItem {
    title: string
    description: string
    image: string
    link: string
    gradientBeginColor: string
    gradientEndColor: string
    type?: string
}

const CaseItem: FC<ICaseItem> = ({ title, description, image, link, gradientBeginColor, gradientEndColor, type = 'Production' }) => {
    return (
        <MotionDiv className={STYLE['work--projects-grid-item']} style={{ "--gradient-begin-color": gradientBeginColor, "--gradient-end-color": gradientEndColor } as React.CSSProperties}>
            <Link to={link}>
                <div className={STYLE['work--projects-grid-item--info']}>
                    <div className={STYLE['work--projects-grid-item--info-title']}>
                        {title}
                    </div>
                    <div className={STYLE['work--projects-grid-item--info-description']}>
                        {description}
                    </div>
                </div>
                <div className={STYLE['work--projects-grid-item--type']}>
                    {type}
                </div>
                <div className={STYLE['work--projects-grid-item--image']}>
                    <img src={image} loading="lazy" />
                </div>
            </Link>
        </MotionDiv>
    )
}

export default CaseItem