import './App.css'
import Card from './components/card'
import CourseCard from './components/CourseCard'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
    <Navbar />
      <div className="hero-block">
        <div className="container">
          <div className="hero__texts">
            <p className='hero__text'>Let's <span>Begins</span></p>
            <h1 className='hero__title'>Let's Find The Right <span>Course</span> For you</h1>
            <p className='hero__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
            <div className="hero__btns-block">
              <button className="register">Register</button>
              <button className="play-video"><img src="/vd-play.svg" alt="" /> Play Video</button>
            </div>
          </div>
          <img src="/hero-img.png" alt="" />
        </div>
      </div>
      <div className="give">
        <div className="container">
          <div className="give__texts">
            <p className='give__text'>WHAT WE GIVE</p>
            <h2 className='give__title'>What do You <br /> Get From Us</h2>
            <p className='hero__desc'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Etiam dignissim, sem non <br /> convallis molestie.</p>
          </div>
          <div className="give__cards">
              <Card />
              <Card />
              <Card />
          </div>
          <div className="give__btns">
            <button className='arrow-btn'><img src="/arrow-btn.svg" alt="" /></button>
            <button className='arrow-btn rotate'><img src="/arrow-btn.svg" alt="" /></button>
          </div>
        </div>
      </div>
      <div className="people-info">
        <div className="container">
          <img src="/Group64.png" alt="" />
          <div className="people-info__content">
            <p className='content__text'>SELECTED COURSE</p>
            <h2 className='content__title'>People Taking Courses</h2>
            <p className='content__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
            <div className="content__info">
              <span className='info-block'>
                <p>6,000</p>
                <p>People Views</p>
              </span>
              <span className='info-block'>
                <p>4,000</p>
                <p>User</p>
              </span>
              <span className='info-block'>
                <p>100</p>
                <p>Course</p>
              </span>
            </div>
          </div>
        </div>
      </div>
        <div className="available">
          <div className="container">
          <div className="course-cards">
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </div>
          <div className="available__content">
            <p className='available__badge'>AVAILABLE FOR YOU</p>
            <h2 className='available__title'>Available Courses</h2>
            <p className='hero__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</p>
            <button className='see-all'>See all</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
