function Footer() {
   return (
      <div className="footer">
         <div className="container">
            <div className="footer__info">
               <img src="/store-logo.svg" alt="" />
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor dolor augue et lectus. </p>
               <div className="icon-box">
                  <img src="/facebook (1).svg" alt="" />
                  <img src="/twetter.svg" alt="" />
                  <img src="/linkedin.svg" alt="" />
                  <img src="/instagram.svg" alt="" />
               </div>
            </div>
            <div className="footer__links">
               <ul>
                  <p>Home</p>
                  <li>Product</li>
                  <li>Course</li>
                  <li>About Us</li>
                  <li>Log in</li>
               </ul>
               <ul>
                  <p>Course</p>
                  <li>HTMK & CSS</li>
                  <li>Javascript</li>
                  <li>Fotographer</li>
                  <li>Desain Grafis</li>
               </ul>
               <ul>
                  <p>Article</p>
                  <li>New</li>
                  <li>Old</li>
                  <li>Trend</li>
                  <li>Popular</li>
               </ul>
               <ul>
                  <p>Contact Us</p>
                  <li>CCdoc123@gmail.com</li>
               </ul>
            </div>
         </div>
      </div>
   )
}
export default Footer