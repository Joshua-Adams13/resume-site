import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import './App.css';
import ProjectsComponent from './components/ProjectComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />

      <section id="intro">
        <p className="name">Hi, my name is <span>Josh Adams</span></p>
        <h2>I love data!</h2>
        <p>I'm currently a Marketing Analyst aspiring to become a developer</p>
        <p>Here are some of my recent projects for you to <a href="https://github.com/Joshua-Adams13">check out</a></p>
      </section>

      <div className="gradient"></div>

      <div className="section-projects">
        <section className="projects">
          <h2>Projects I'm proud of</h2>
          <ProjectsComponent />
        </section>
      </div>

      <div className="section-background">
        <section id="contact">
          <h2>Contact Me</h2>
          <p>I'm in the process of trying to learn as much as I can about front end deveoplment, so let's chat about opportunities to grow together.</p>
          <p><a href="mailto:josh.l.adams13@gmail.com" className="button">Email me</a></p>
        </section>
      </div>

      <div className="gradient"></div>

      <FooterComponent />
    </div>
  );
}

export default App;
