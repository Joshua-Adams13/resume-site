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
        <h3>A current Marketing Analyst aspiring to become a software engineer</h3>
        <p>In my marketing career, I've learned a profound truth about myself - I am incredibly passionate about building things 
          and working with data. I've spent many evenings and weekends learning to write code and now I'm  
          looking for a career where I can grow my skills and contribute to building and optimizing tools with like-minded teammates.</p>
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
