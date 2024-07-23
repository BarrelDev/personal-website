import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

interface SkillBarProps {
  name: string;
  progress: number;
}

const SkillBar = ({ name, progress }: SkillBarProps) => {
  let progressString: string = progress + "%";

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container" data-aos="fade-up">
      <h3>{name}</h3>
      <div
        className="progress"
        role="progressbar"
        aria-label="Animated striped example"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          style={{ width: progressString }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
