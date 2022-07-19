import STYLE from '../assets/scss/resume.module.scss';

const Resume = () => {
    return (
        <div className={STYLE['resume']}>
            <div className={`${STYLE['resume--header']} animate--init`}>
                <div className={STYLE['resume--title-small']}>
                    A few words about me
                </div>
                <h1 className={`${STYLE['resume--title']} animate--second`}>
                    I'm Kevin Stoop, a full-stack developer who is passionate about building web applications. I specialize in React, Node.js, and PHP.
                </h1>
                <p className={`animate--third`}>
                    Over the past few years, I've worked on a variety of projects, from small to large, from simple to complex.
                </p>
            </div>
            <div className={STYLE['resume--image']}>

            </div>
        </div >
    )
}

export default Resume