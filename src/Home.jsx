import React from "react";

const Home = () => {
  return (
    <>
      <div className="story">
        Welcome to our electrician website! We are a professional and reliable
        company that specializes in providing top-quality electrical services
        for residential and commercial properties. Our team of highly-skilled
        and licensed electricians are dedicated to ensuring the safety and
        satisfaction of our clients. We offer a wide range of services including
        wiring, lighting installation, panel upgrades, generator installation,
        and troubleshooting. We understand that electrical issues can be
        stressful, so we strive to make the process as easy and stress-free as
        possible for our customers. We use only the highest quality materials
        and the latest techniques to ensure that the job is done right the first
        time.
        <br />
        <br />
        <a
          style={{ color: "blue" }}
          href="https://wa.me/+9779806405652"
          target="_blank"
        >
          Contact us today to schedule an appointment.
        </a>
      </div>
      <div className="contact">
        <h2>Contact me:-</h2>
        <div className="gr">
          <a href="https://www.facebook.com/" target="_blank">
            <div className="con">
              <img
                src="/Facebook.png"
                alt="Facebook"
                height="80px"
                width="80px"
              />
              <h2>Facebook</h2>
            </div>
          </a>
          <a href="tel:009779806405652" target="_blank">
            <div className="con">
              <img src="/Call.png" alt="Call" height="80px" width="80px" />
              <h2>Call</h2>
            </div>
          </a>
          <a href="https://wa.me/+9779806405652" target="_blank">
            <div className="con">
              <img src="/WA.png" alt="WhatsApp" height="80px" width="80px" />
              <h2>WhatsApp</h2>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
export default Home;
