import './style.css'

export default function ProjectCard({ projectName, projectImg, projectTools }) {
    return (
        <div className="col-lg-5 col-sm-12 p-card my-5 project-img">
            <div style={{
                backgroundImage: `url(${projectImg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '200px'
            }}  >
                <div className="card-overlay p-3">
                    <p>{projectName}</p>
                    <p>{projectTools}</p>
                </div>
            </div>
        </div>
    )
}