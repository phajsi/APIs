type Props = {
    src : string;
}


const Iframe = (props: Props) => {

    return (
        <iframe 
        src={`https://open.spotify.com/embed/episode/${props.src}?utm_source=generator&theme=0`}
        width="100%" 
        height="232" 
        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        sandbox="allow-same-origin allow-scripts allow-popups ">
        </iframe> 
    )

}

export default Iframe;