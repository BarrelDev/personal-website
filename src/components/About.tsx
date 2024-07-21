import logo from "../assets/images/profile-img.jpg";

const About = () => {
  return (
    <>
      <div className="container-fluid bg-primary-subtle" id="about">
        <div className="container mt-3 pt-5 pb-3">
          <h1 className="text-center fw-bold fs-1">About</h1>
        </div>
        <div className="container col-xxl-8 px-4 py-1">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6">
              <p className="fw-light text-white text-body-light text-wrap fs-5 ">
                A high school junior with a passion for computer science.
                Looking forward to help people using technology. I am love Game
                development, Programming Robots. The areas that I am interested
                and focusing are AI/ML and Human computer Interaction.
              </p>
              <h3 className="display-5 fw-bold text-white text-body-light fs-4 lh-1 mb-3 text-capitalized">
                Game Developer & Robot Automation.
              </h3>
              <p className="fw-light text-white text-body-light text-wrap fs-5">
                I am more focused in developing my knowledge in autonomous
                coding for Robots. The Robots I programmed participated in FRC
                competitions and reached the district level. I have developed
                modules for custom features and interactions for the popular
                voxel-based sandbox game, Minecraft.
              </p>
              <h3 className="display-5 fw-bold text-white text-body-light fs-4 lh-1 mb-3 text-capitalized">
                Mentoring Younger Kids.
              </h3>
              <p className="fw-light text-white text-body-light text-wrap fs-5">
                Teaching others means teaching oneself first. It quite literally
                forces one to become a master of any skill that he/she want to
                teach someone else. I strongly believe in sharing knowledge will
                help one grow professionally. So, I constantly involve my self
                as Mentoring youngers in the field of robotics, programming.
              </p>
            </div>
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src={logo}
                className="d-block mx-lg-auto img-fluid border border-3 rounded-5 shadow"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
