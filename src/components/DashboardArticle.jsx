
const DashboardArticle = () => {
    return (
      <article>
        <div className="text">
          <h3>Pax8 Marketing Report</h3>
          <p className="blackbox">I developed a reporting dashboard for my team to analyze and report out on performance for paid 
            marketing campaings using a data connector called <a href="https://www.adverity.com/">Adverity</a>. This data connector pulled and cleaned 
            our data to be stored in Google Big Query where it could be loaded into a dashboard I created in 
            Google Data Studio.
          </p>
          <h4>Technologies used:</h4>
          <ul>
            <li>Adverity</li>
            <li>Google Big Query (SQL)</li>
            <li>Google Data Studio</li>
            <li>Google Analytics</li>
          </ul>
        </div>
        <img src="images/dashboard-screenshot.png" alt="Marketing campaign reporting dashboard" className="projects-img"></img>
      </article>
    )
}


export default DashboardArticle;