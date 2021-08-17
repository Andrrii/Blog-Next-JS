import classes from './hero.module.css'

function Hero() {

    return (
        <>
            <section className={classes.hero}>
                <div className={classes.image}>
                    <img 
                        src = "/images/site/max.jpg" 
                        alt = 'An image showing Me' 
                        width = {300}
                        height = {300}
                    />
                </div>
                <h1>Hi, I'm Andrii</h1>
                <p>I blog about searching work in IT</p>   
            </section>
        </>
    )
}

export default Hero