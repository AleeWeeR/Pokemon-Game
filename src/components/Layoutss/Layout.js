import l from './style.module.css';


const Layout  = ({title, descr, urlBg , bgColor = 'blue'}) => {
    
    
    const rootStyle =
    urlBg?
    {backgroundImage: `url(${urlBg})`, backgroundSize: "cover"}
    :
    {background: bgColor}
    
    return (
        
        <section
            class={l.root}
            style = {rootStyle}
        >
            <div class={l.wrapper}>
                <article>
                    <div class={l.title}>
                        <h3>{title}</h3>
                        <span class={l.separator}></span>
                    </div>
                    <div class ={l.desc}>
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
        
    )
}

export default Layout;





