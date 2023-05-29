import ProjectCard from "./ProjectCard/ProjectCard"


export default function Portfolio() {
    return (
        <section className="container my-5 mx-6">
            <div className="columns ">
                <div className="row d-flex align-items-start gx-6 my-5 p-container">
                    <ProjectCard projectName="Mental Oasis" projectImg="./assets/images/Blank-Avatar.png" projectTools="MERN Stack"></ProjectCard>
                    <ProjectCard projectName="Mental Oasis" projectImg="./assets/images/Blank-Avatar.png" projectTools="React"></ProjectCard>
                    <ProjectCard projectName="Mental Oasis" projectImg="./assets/images/Blank-Avatar.png" projectTools=""></ProjectCard>
                </div>
            </div>
        </section>

    )
}