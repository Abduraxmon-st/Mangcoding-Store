function Navbar() {
   return (
      <nav className="navbar">
         <div className="container">
         <img className="logo" src="/store-logo.svg" alt="" />
         <ul className="navbar__items">
            <li>Home</li>
            <li>Course</li>
            <li>About Us</li>
            <li>Article</li>
            <li>Contact</li>
         </ul>
         <div className="navbar__btns-block">
            <button className="log-in">Log in</button>
            <button className="register">Register</button>
         </div>
         </div>
      </nav>
   )
}
export default Navbar