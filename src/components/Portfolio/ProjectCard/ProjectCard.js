import './style.css'

export default function ProjectCard({projectName, projectImg, projectTools}){
    return(
        <div className="col-lg-5 col-sm-12 p-card">
            <div style={{
                backgroundImage : `url(${projectImg})`,
                backgroundSize : 'contain',
                backgroundRepeat : 'no-repeat',
                height : '200px'
            }}  >
                <p>{projectName}</p>
                <p>{projectTools}</p>
            </div>
        </div>
    )
}