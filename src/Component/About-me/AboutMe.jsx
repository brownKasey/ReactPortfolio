// importing styling ٩(＾◡＾)۶
import "../../styles/AboutMe.css";

function About() {
  return (
    <>
      <div>
        <div className="container">
          <div className="text-container">
            <h1 className="display-1 hello">Hello</h1>
            <p className="lead introduction">
              My name is Kasey Brown, and I am an aspiring web developer
              currently attending a Full Stack Devlopment Bootcamp with the
              Univeristy of Minnesota. I enjoy creating digital experiences that
              are visually appealing, functional and user-friendly.
            </p>
            <p className="lead journey">
              My journey started when I enrolled in University of
              Minnesota&apos;s Full Stack Devlopment Bootcamp in early 2023.
              Since then, I&apos;ve been on a path of constant learning and
              growth, that has made me fall in love with creating websites. With
              each project I take on, I aim to push the boundaries of what I am
              capable of and deliver results that exceed expectations.
            </p>
            {/* <p className="lead skills">
              Front-End Development: HTML, CSS, React, Handelbars
              <br></br>
              Back-End Development: Node.js, Express.js, Javascript
              <br></br>
              Database Management: MongoDB, MySQL, PostgreSQL
              <br></br>
              Version Control: Git, GitHub
              <br></br>
              Responsive Design: Bootstrap, Bulma, CSS Grid, Flexbox
              <br></br>
              API Integration: RESTful APIs, GraphQL
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

// exporting function (´◡`)
export default About;
