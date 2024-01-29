import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="main-content">
    <header className="section sec1 header active" id="home">
        <div className="header content">
            <div className="left-header">
                <div className="h-shape"></div>
                <div className="image">
                    <img src="img/BGQ_1.jpg" alt=""/>
                </div>
            </div>
            <div className="right-header">
                <h1 className="name">
                    Hi, I'm <span>Sera Ndabari</span>
                    A Web Developer
                </h1>
                <p>
                    I'm a web developer, I love to create beautiful functional websites.
                    Other stuff to write here
                </p>
                <a href="" className="main-btn">
                    <span className="btn-text">Download CV</span>
                    <span className="btn-icon"><i className="fas fa-download"></i></span>
                </a>
            </div>
        </div>
    </header>
    
    <section className="section sec2 about" id="about">
        <div className="main-title">
            <h2>About <span>me</span></h2>
        </div>
        <div className="about-container">
            <div className="left-about">
                <h4>Information About me</h4>
                <p>
                    Final year undergraduate student pursuing a degree in 
                    Business and Information technology, expected to graduate in July 2024. 
                    Dean's List awardee (2020-2021) with a strong academic background and practical experience 
                    in IT and business-related courses. 
                    Seeking to gain valuable insights into ICT practices and trying new things in a 
                    collaborative environment. 
                </p>
                <div className="btn-con">
                    <a href="#" className="main-btn">
                        <span className="btn-text">Download CV</span>
                        <span className="btn-icon"><i className="fas fa-download"></i></span>
                    </a>
                </div>
            </div>
        </div>

        <div className="about-stats">
            <h4 className="stat-title">My Skills</h4>
            <div className="progress-bars">
                <div className="progress-bar">
                    <p className="prog-title">html5</p>
                    <div className="progress-con">
                        <p className="prog-text">75%</p>
                        <div className="progress">
                            <span className="html"></span>
                        </div>
                    </div>
                </div>
                <div className="progress-bar">
                    <p className="prog-title">css3</p>
                    <div className="progress-con">
                        <p className="prog-text">65%</p>
                        <div className="progress">
                            <span className="css"></span>
                        </div>
                    </div>
                </div>
                <div className="progress-bar">
                    <p className="prog-title">Python</p>
                    <div className="progress-con">
                        <p className="prog-text">75%</p>
                        <div className="progress">
                            <span className="js"></span>
                        </div>
                    </div>
                </div>
                <div className="progress-bar">
                    <p className="prog-title">javascript</p>
                    <div className="progress-con">
                        <p className="prog-text">65%</p>
                        <div className="progress">
                            <span className="react"></span>
                        </div>
                    </div>
                </div>
                <div className="progress-bar">
                    <p className="prog-title">C++</p>
                    <div className="progress-con">
                        <p className="prog-text">40%</p>
                        <div className="progress">
                            <span className="node"></span>
                        </div>
                    </div>
                </div>
                <div className="progress-bar">
                    <p className="prog-title">C#</p>
                    <div className="progress-con">
                        <p className="prog-text">20%</p>
                        <div className="progress">
                            <span className="python"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section sec3 portfolio" id="portfolio">
        <div className="main-title">
            <h2><span className="bg-text">My Work</span></h2>
        </div>
        <p className="port-text">
            Here is some of my work that I've done in various programming languages.
        </p>
        <div className="portfolios">
            <div className="portfolio-item">
                <div className="image">
                    <img src="img/port1.jpg" alt=""/>
                </div>
                <div className="hover-items">
                    <h3>Project Source</h3>
                    <div className="icons">
                        <a href="#" className="icon">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fab fa-behance"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="portfolio-item">
                <div className="image">
                    <img src="img/port2.jpg" alt=""/>
                </div>
                <div className="hover-items">
                    <h3>Project Source</h3>
                    <div className="icons">
                        <a href="#" className="icon">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fab fa-behance"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="portfolio-item">
                <div className="image">
                    <img src="img/port3.jpg" alt=""/>
                </div>
                <div className="hover-items">
                    <h3>Project Source</h3>
                    <div className="icons">
                        <a href="#" className="icon">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fab fa-behance"></i>
                        </a>
                        <a href="#" className="icon">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
          </div>
    </section>
    <section className="section sec4 blogs" id="blogs"></section>
    <section className="section sec5 contact" id="contact"></section>



    <div className="controls">
        <div className="control control-1 active-btn" data-id="home">
            <i className="fas fa-home"></i>
        </div>
        <div className="control control-2" data-id="about">
            <i className="fas fa-user"></i>
        </div>
        <div className="control control-3" data-id="portfolio">
            <i className="fas fa-briefcase"></i>
        </div>
        <div className="control control-4" data-id="blogs">
            <i className="far fa-newspaper"></i>
        </div>
        <div className="control control-5" data-id="contact">
            <i className="fas fa-envelope-open"></i>
        </div>
    </div>
    
    {/* <script src="app.js"></script> */}
</div>
  );
}

export default App;
