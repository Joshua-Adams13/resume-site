
const MoviesArticle = () => { 
    return (
          <article>
            <div className="text">
              <h4>Latest Project</h4>
              <h3>Movie's List</h3>
              <p className="blackbox">This Vue app pulls a list of my favorite movies from the TMDB API,adds them to the store and then filters
                the movies based on genre to display in different sections. 
                </p>
              <h4>Technologies used:</h4>
              <ul>
                <li>Vue</li>
                <li>Nuxt</li>
                <li>CSS</li>
                <li>TMDB API</li>
              </ul>
            </div>
            <img src="images/movies-screenshot.png" alt="Movie list app" className="projects-img"></img>    
          </article>
    )
}


export default MoviesArticle;