import "../styles/timeline.css"

export default function Timeline() {
    return (
      <div className="tl-bg">
        <div className="tl-container">
          <h2 className="title" data-aos="zoom-out-up">
            Timeline
          </h2>
          <div>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100vw",
              }}
            >
              <li className="li">
                <div className="text-small text-right">October 2001</div>
                <div className="sep">
                  <span className="dot"></span>
                  <span className="line"></span>
                </div>
                <div className="text" data-aos="fade-left">
                  I was born in Yogyakarta, Indonesia and grew up here
                </div>
              </li>

              <li className="li">
                <div className="text text-right" data-aos="fade-right">
                  I grew up as a regular kid with some interest like sport,
                  gaming, anime, drawing, etc. <br />
                  At this time I still don't even know what programming is,{" "}
                  <br />I didn't even know about HTML, CSS and stuff
                </div>
                <div className="sep">
                  <span className="dot"></span>
                  <span className="line"></span>
                </div>
                <div className="text-small">2001 - 2017</div>
              </li>

              <li className="li">
                <div className="text-small text-right">2017 - 2020</div>
                <div className="sep">
                  <span className="dot"></span>
                  <span className="line"></span>
                </div>
                <div className="text" data-aos="fade-left">
                  Enrolling into{" "}
                  <a
                    style={{ color: "lightblue" }}
                    target="_blank"
                    href="https://goo.gl/maps/WLZRf83QfSvaNHzN6"
                  >
                    Madrasah Aliyah Negri 3 Sleman, Yogyakarta
                  </a>{" "}
                  as a science student.
                  <br />
                  I love science subject like math, physics, and biology
                  <br />
                  *chemist is an exception lol
                  <br />I consider myself as a diligent student.
                </div>
              </li>

              <li className="li">
                <div className="text text-right" data-aos="fade-right">
                  Become student at{" "}
                  <a
                    style={{ color: "lightblue" }}
                    target="_blank"
                    href="https://goo.gl/maps/1osro2Cpftrz53Xo8"
                  >
                    AMIKOM university
                  </a>{" "}
                  and majoring in...
                  <br />
                  Informathics Management(informathics major mixed with
                  information system)...
                  <br />
                  and pursuing associate degree. At this time I fell in love
                  with programming
                  <br />
                  Almost everyday I learn about technology and stuff
                </div>
                <div className="sep">
                  <span className="dot"></span>
                  <span className="line"></span>
                </div>
                <div className="text-small">2020 - 2023</div>
              </li>

              <li className="li">
                <div className="text-small text-right">Now - Future</div>
                <div className="sep">
                  <span className="dot"></span>
                  <span className="line"></span>
                </div>
                <div className="text" data-aos="fade-left">
                  My future goals involve growing with a company where I can
                  continue to learn,
                  <br />
                  and contribute as much value as possible to the team
                  <br />
                  <p style={{ color: "lightblue" }}>
                    Is that fit to your company value? if so...
                    <br />
                    please leave me a trace at
                    <br />
                    rabihutomo11@gmail.com or
                    <br />
                    dm me on twitter for fast response :D
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}