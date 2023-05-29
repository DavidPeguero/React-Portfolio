import './style.css'

export default function ProjectCard({ projectName, projectImg, projectTools, projectLink }) {
    return (
        <div className="col-lg-5 col-sm-12 p-card my-5 project-img">
            <a href={projectLink}>
                <div style={{
                    backgroundImage: `url(${projectImg})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: '200px'
                }}  >
                    <div className="card-overlay p-3" style={{color : 'black'}}>
                        <p>{projectName}</p>
                        <p>{projectTools}</p>
                    </div>
                </div>
            </a>
        </div>
    )
}