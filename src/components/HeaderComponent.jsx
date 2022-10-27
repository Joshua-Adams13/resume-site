const Header = () => {
    return (
        <header>
        <nav>
          <ul>
            <li>
            <h1><a href="index.html"><span className="fa-solid fa-code" aria-hidden="true"></span><span className="title">Josh Adams</span></a></h1>
            </li>
            {/* <li><a href="#projects">Projects</a></li> */}
            {/* <li><a href="about.html">About</a></li> */}
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://www.linkedin.com/in/joshua-adams-352201a7/" target="_blank">
              <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
                    <span className="sr-only">LinkedIn</span> 
                  </a>
                  </li>
            <li><a href="https://github.com/Joshua-Adams13" target="_blank"><span className="fa-brands fa-github" aria-hidden="true"></span><span class="sr-only">Github</span></a></li>
            <li><a href="" target="_blank" className="button">Resume</a></li>
          </ul>
        </nav>
      </header>
    )
}

export default Header;