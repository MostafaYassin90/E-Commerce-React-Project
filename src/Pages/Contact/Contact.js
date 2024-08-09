import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <h2 className="main-title">Contact</h2>

        <div className="contact-map">
          <div className="holder-iframe">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13607.270819450521!2d34.45654475504805!3d31.501694187556655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f054e542767%3A0x7ff98dc913046392!2sGaza!5e0!3m2!1sen!2seg!4v1721674949953!5m2!1sen!2seg"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="info">
            <div className="one">
              <h6>Store In Egypt</h6>
              <p>Egypt, Giza, Inside The Sphinx, Room Number 220</p>
              <p>sale@max.com</p>
              <p>+1 246-345-0695</p>
            </div>
            <div className="two">
              <h6>Store in Istanbul</h6>
              <p>Egypt, Giza, Inside The Sphinx, Room Number 220</p>
              <p>sale@max.com</p>
              <p>+1 246-345-0695</p>
            </div>
          </div>
        </div>

        <div className="touch">
          <h3>Get In Touch</h3>
          <form>
            <input type="text" placeholder="Name *" />
            <input type="email" placeholder="Email Address *" />
            <textarea type="text" placeholder="Your Message" />
            <button type="submit btn btn-dark">Submit</button>
          </form>
        </div>


      </div>
    </div>
  );
}
export default Contact;