import { useState } from 'react';
import DashboardArticle from './DashboardArticle';
import MoviesArticle from './MoviesArticle';
import ClassicCarsDbArticle from './ClassicCarsDBArticle';
import TitleCaseConverterArticle from './TitleCaseConverterArticle';

const ProjectsComponent = () => {
    const [ showDashboard, setShowDashboard ] = useState(true);
    const [ showMovies, setShowMovies ] = useState(false);
    const [ showTitleCase, setShowTitleCaseConverter ] = useState(false);
    const [ showClassicCars, setShowClassicCars ] = useState(false);

    const dashboardClick = event => {
      setShowDashboard(true)
      setShowMovies(false)
      setShowTitleCaseConverter(false)
      setShowClassicCars(false)
    }

    const moviesClick = event => {
        setShowDashboard(false)
        setShowMovies(true)
        setShowTitleCaseConverter(false)
        setShowClassicCars(false)
      }

    const titleCaseClick = event => {
        setShowDashboard(false)
        setShowMovies(false)
        setShowTitleCaseConverter(true)
        setShowClassicCars(false)
    }

    const classicCarsClick = event => {
        setShowDashboard(false)
        setShowMovies(false)
        setShowTitleCaseConverter(false)
        setShowClassicCars(true)
    }
    
    return (
        <div className="project-article">
            <button onClick={ dashboardClick } className="project-selectors">Dashboard Project</button>
            <button onClick={ moviesClick } className="project-selectors">Movies List Project</button>
            <button onClick={ titleCaseClick } className="project-selectors">Title Case Converter</button>
            <button onClick={ classicCarsClick } className="project-selectors">Classic Cars Database</button>

            {showDashboard && <DashboardArticle />}
            {showMovies && <MoviesArticle />}
            {showTitleCase && <TitleCaseConverterArticle />}
            {showClassicCars && <ClassicCarsDbArticle />}
        </div>
    )
}


export default ProjectsComponent;