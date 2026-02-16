import github from "../assets/icons8-github-50.png"

interface iconProps{
    height : string,
    width : string,
    backgroundColor : string
}

export function GithubIcon({height, width, backgroundColor} : iconProps){
    return <img  style={{ height, width, backgroundColor }}src={github} alt="spotify.icon" />
}