function CourseCard() {
   return (
      <div className="course-card">
         <div className="badge">Best Course</div>
         <img src="/nbook.png" alt="" />
         <span className="price">$ 20 USD</span>
         <p>HTML & CSS <span>1,500 Views</span></p>
         <span className="card__vd">120 Videos</span>
         <span className="card__teacher">2 Teacher</span>
      </div>
   )
}
export default CourseCard