import STYLE from './navigation.module.scss'

type Props = {}

const Navigation = (props: Props) => {
    return (
        <nav className={STYLE['navigation']}>
            <div className={STYLE['navigation-inner']}>
                hoi
            </div>
        </nav>
    )
}

export default Navigation