const Footer = () => {
    return (
        <footer>
        <ul>
          <li>
            <h2>Josh Adams</h2>
          </li>
          <li><a href="https://www.linkedin.com/in/joshua-adams-352201a7/" target="_blank">
            <span className="fa-brands fa-linkedin" aria-hidden="true"></span>
                  <span className="sr-only">LinkedIn</span> 
                </a>
          </li>
          <li><a href="https://github.com/Joshua-Adams13" target="_blank"><span class="fa-brands fa-github" aria-hidden="true"></span><span class="sr-only">Github</span></a></li>
          <li><a href="mailto:josh.l.adams13@gmail.com" target="_blank"><span className="fa-solid fa-envelope" aria-hidden="true"></span><span class="sr-only">Email</span></a></li>
        </ul>
        <p><small>&copy; 2023 Josh Adams. All rights reserved.</small></p>
      </footer>
    )
}

export default Footer;