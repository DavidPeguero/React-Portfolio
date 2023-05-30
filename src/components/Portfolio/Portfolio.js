import ProjectCard from "./ProjectCard/ProjectCard"


export default function Portfolio() {
    return (
        <section className="container my-5 mx-6">
            <div className="columns ">
                <div className="row d-flex align-items-start gx-6 my-5 p-container justify-content-between">
                    <ProjectCard projectName="Mental Oasis" projectImg={process.env.PUBLIC_URL+ "/assets/images/mental-oasis.png"} projectTools="Node.js | Express.js | mySQL"></ProjectCard>
                    <ProjectCard projectName="YuGiOh Forbidden List Maker" projectImg={process.env.PUBLIC_URL + "/assets/images/ygo.png"} projectTools="Python | APIs | Webscraping"></ProjectCard>
                    <ProjectCard projectName="Tenzies" projectImg={process.env.PUBLIC_URL + "/assets/images/tenzies.png"} projectTools="React"></ProjectCard>
                    <ProjectCard projectName="dis(Cover) Music" projectImg={process.env.PUBLIC_URL + "/assets/images/discover-main.png"} projectTools="JS | HTML | RESTful APIs | CSS"></ProjectCard>
                </div>
            </div>
        </section>

    )
}