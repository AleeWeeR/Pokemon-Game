import h from  './style.module.css';

const Header = (props) => {
    return (
        
        <header 
            class={h.root}
        >
            <div class={h.forest}></div>
            <div class={h.container}>
                <h1>{props.title} </h1>
                <p>{props.descr}</p>
            </div>
        </header>
        
    )
}

export default Header;

