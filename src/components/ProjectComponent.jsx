import { useState } from 'react';
import DashboardArticle from './DashboardArticle';
import MoviesArticle from './MoviesArticle';

const ProjectsComponent = () => {
    const [ showDashboard, setShowDashboard ] = useState(true);
    const [ showMovies, setShowMovies ] = useState(false);

    const dashboardClick = event => {
      setShowDashboard(true)
      setShowMovies(false)
    }

    const moviesClick = event => {
        setShowMovies(true)
        setShowDashboard(false) 
      }
    
    return (
        <div className="project-article">
            <button onClick={ dashboardClick } className="project-selectors">Dashboard Project</button>
            <button onClick={ moviesClick } className="project-selectors">Movies List Project</button>

            {showDashboard && <DashboardArticle />}
            {showMovies && <MoviesArticle />}
        </div>
    )
}


export default ProjectsComponent;