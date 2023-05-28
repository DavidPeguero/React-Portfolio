



export default function About(){
    return(
        <div className="container my-5 mx-6">
            <div>
                <h2 className="h2">About Me</h2>
                <img src="./assets/images/Blank-Avatar.png" alt="Blank Avatar" style={{ maxWidth : "200px"}} className="image-fluid"/>
                
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio provident enim, unde soluta reiciendis vero perferendis iure labore voluptates ratione excepturi est explicabo expedita culpa distinctio modi aperiam repellendus, necessitatibus accusamus laboriosam suscipit! Eum earum non enim, eaque officia quibusdam voluptates consequuntur dolorum ab et delectus consectetur nam minus ad!</p>
            <footer className="fixed-bottom">
                <ul className="d-flex flex-row justify-content-center gap-5" style={{listStyleType : 'none'}}>
                    <li>GitHub</li>
                    <li>LinkedIn</li>
                    <li>StackOverflow</li>
                </ul>
            </footer>
        </div>
    )
}