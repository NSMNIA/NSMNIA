import STYLE from '../assets/scss/home.module.scss';

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <div className={STYLE["hero"]}>
                <div className={STYLE["hero--inner"]}>
                    <h1>
                        Kevin Stoop — Webdeveloper
                    </h1>
                    <h2>
                        passionate about digital products that help people experience everyday life, not endure it.
                    </h2>
                </div>
            </div>
        </>
    )
}

export default Home