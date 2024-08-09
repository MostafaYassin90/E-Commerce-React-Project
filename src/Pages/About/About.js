import "./About.css";

function About() {
  return (
    <div className="about">
      <h2 className="main-title">About Us</h2>
      <div className="about-img">
        <img src={require("../../assets/images/single-page-02.jpg")} alt="about-img" />
      </div>

      <div className="container">
        <h3 className="title">Our Store</h3>
        <p className="text one">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="text two">Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.</p>

        <div className="about-task">
          <div className="mission">
            <h4>Our Mission</h4>
            <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="vision">
            <h4>Our Vision</h4>
            <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>

        <div className="about-company">
          <div className="about-company-img">
            <img src={require("../../assets/images/about-image-01.jpg")} alt="about-img" />
          </div>
          <div className="about-company-text">
            <h4>The Company</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras.</p>
          </div>

        </div>

      </div>
    </div>
  );
}
export default About;