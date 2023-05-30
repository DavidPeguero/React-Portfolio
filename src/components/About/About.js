



export default function About(){
    return(
        <div className="container my-5 mx-6 d-flex flex-column align-items-center">
            <div>
                <h2 className="h2">About Me</h2>
                <img src={process.env.PUBLIC_URL + "/assets/images/me.png"} alt="Blank Avatar" style={{ maxWidth : "200px", maxHeight:"200px"}} className="image-fluid"/>
            </div>
            <p>I am aspiring Full stack Developer who has experience in making websites using React, Javascript, HTML5, CSS, and SQL/noSQL databases.
                I am also experience in using Python, Java, C#, and C++. I have recently completed my Certification through the UCF Fulltime Coding Bootcamp
                and have furthered my skills in the area.
            </p>
            <br></br>
            <p>Eventually I have aspirations of being able to design elegant websites both in appearance and functionality. I also
                want to become a game developer as one of my main passions is and has always been gaming.
            </p>
            
        </div>
    )
}