import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <h1>John Mark Salas</h1>
          <h2><em>Future Game Developer</em></h2>
        </div>

        <div className="Content">
          <div className="LeftSidebar">
            <div className="contact">
              <h3>Contact</h3>
              <p>jmisalas.student@ua.edu.ph <i className="fas fa-envelope"></i></p>
              <p>(63+) 977-330-8006 <i className="fas fa-phone"></i></p>
              <p>San Vicente Sto Tomas Pampanga <i className="fas fa-map-marker-alt"></i></p>
              <p><a href="https://github.com/jmstzu">Github <i className="fab fa-github"></i></a></p>
            </div>

            <div className="education">
              <h3>Education</h3>
              <p>University of The Assumption</p>
              <p>Bachelor of Science Information Technology</p>
              <p>(Ongoing)</p>
            </div>

            <div className="skills">
              <h3>Skills</h3>
              <ul>
                <li>HTML</li>
                <li>Python</li>
                <li>CSS</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Java</li>
                <li>Javascript</li>
              </ul>
            </div>
          </div>

          <div className="RightSidebar">
            <h3>Work Experience</h3>
            <div className="WorkExperience">
              <h4>Director of Game Development</h4>
              <p>Riot Games |2020 - Current</p>
              <ul>
                <li>Directed a whole team of developers to make new FPS game from scratch.</li>
                <li>Mentoring developers that are in charge of the major coding for the game.</li>
                <li>Managing a team of developers for future updates and bugs to be fix</li>
              </ul>

             <div className="WorkExperience2">
                <h4>Senior Game Developer</h4>
                  <p>Valve Corporation | 2016 - 2020</p>
                  <ul>
                    <li>Manage a team of developers to keep up with the updates and bug that needs to be fix.</li>
                    <li>Developed new game modes that are based on the players feedbacks.</li>
                    <li>Help the designers to make a gun skin based on the players feedbacks.</li>
                  </ul>
              </div>

              <div className="WorkExperience3">
                <h4>Game Developer</h4>
                  <p>Rockstar | 2013 - 2016</p>
                  <ul>
                    <li>Collaborated with the visual team to code the visuals for GTA V.</li>
                    <li>Help the team of developers to code the functionality and design of the cars. </li>
                    <li>Manage a team of developers to make NPC for the game. </li>
                  </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
