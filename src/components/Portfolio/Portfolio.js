import ProjectCard from "./ProjectCard/ProjectCard"


export default function Portfolio() {
    return (
        <section className="container my-5 mx-6">
            <div className="columns ">
                <div className="row d-flex align-items-start gx-6 my-5 p-container justify-content-between">
                    <ProjectCard projectName="Mental Oasis" projectLink={"https://github.com/DavidPeguero/Mental-Oasis"} projectImg={process.env.PUBLIC_URL+ "/assets/images/mental-oasis.png"} projectTools="Node.js | Express.js | mySQL"></ProjectCard>
                    <ProjectCard projectName="YuGiOh Forbidden List Maker" projectLink={"https://github.com/DavidPeguero/Yugioh-BanListChangeScraper/releases/tag/1.0.0"} projectImg={process.env.PUBLIC_URL + "/assets/images/ygo.png"} projectTools="Python | APIs | Webscraping"></ProjectCard>
                    <ProjectCard projectName="Tenzies" projectLink={"https://david-peguero-tenzies.netlify.app/"} projectImg={process.env.PUBLIC_URL + "/assets/images/tenzies.png"} projectTools="React"></ProjectCard>
                    <ProjectCard projectName="dis(Cover) Music" projectLink={"https://github.com/CoolJH2K/dis-cover-music"} projectImg={process.env.PUBLIC_URL + "/assets/images/discover-main.png"} projectTools="JS | HTML | RESTful APIs | CSS"></ProjectCard>
                    <ProjectCard projectName="Dialogue Dash" projectLink={"https://github.com/CWolfe1320/dialoguedash"} projectImg={process.env.PUBLIC_URL + "/assets/images/dd-img.gif"} projectTools="Unity | C# | Wit.ai"></ProjectCard>
                    <ProjectCard projectName="JATE" projectLink={"https://github.com/DavidPeguero/JATE"} projectImg={process.env.PUBLIC_URL + "/assets/images/jate.png"} projectTools="MongoDB | Mongoose | Webpack"></ProjectCard>
                </div>
            </div>
        </section>

    )
}