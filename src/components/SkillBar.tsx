interface SkillBarProps {
  name: string;
  progress: number;
}

const SkillBar = ({ name, progress }: SkillBarProps) => {
  let progressString: string = progress + "%";

  return (
    <div className="container">
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
