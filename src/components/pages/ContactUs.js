import React from "react";
import './Contact.css';

const ContactUs = () => {
  return (
    <React.Fragment>
      <br />
      <br />
      <br />
      <section className="content-container">
        <div className="textArea">
          <h2>Contact Us</h2>
          <p>
            We would love to hear from you!.
            <br />
            For any enquiries, feel free to drop us an email!
          </p>
          <p>How can we help you?</p>
        </div>

        <div className="block">
          <div className="row">
            <div className="col-left">
              <form
                id="contact"
                action="https://formspree.io/f/xwkapwwy"
                method="POST"
              >
                <h4>Leave us a message</h4>


                <label>Name:</label>
                <br />
                <input type="text" name="name" />
                <br />
                <label>Company:</label>
                <br />
                <input type="text" name="company" />
                <br />
                <label>Email:</label>
                <br />
                <input type="text" name="_replyto" />
                <br />
                <label>Phone:</label>
                <br />
                <input type="tel" name="tel" />
                <br />
                <label>Your message:</label>
                <br />
                <textarea name="message"></textarea>
                <br />

                <button type="submit">Send</button>
              </form>
            </div>
            <div className="col-right">
              <div id="details">
                <h4>Drop by our Office</h4>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <i className="fa fa-map-marker fa- "></i>
                      </td>
                      <td>
                        Electro .Co,
                        <br />
                        G2 Dovedale Parc,
                        <br />
                        Sesame Street,
                        <br />
                        8009,
                        <br />
                        Cape Town, South Africa.
                        <p></p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-phone fa- "></i>
                      </td>
                      <td>Phone No : 021-638-4017</td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-clock-o fa- "></i>
                      </td>
                      <td>
                        Operation Time:
                        <br />
                        9.00 am – 5.30 pm (Mon – Sat) <br />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <i className="fa fa-envelope fa- "></i>
                      </td>
                      <td>Email : electro@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactUs;
