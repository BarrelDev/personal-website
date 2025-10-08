import SkillBar from "./SkillBar";
import { useEffect, useState } from "react";

const SkillTabs = ({ skills }) => {
  const [activeTab, setActiveTab] = useState("Technical");

  const filteredSkills = skills.filter((s) => s.category === activeTab);

  return (
    <div>
      <div className="btn-group mb-4">
        {["Technical", "Soft", "Leadership"].map((cat) => (
          <button
            key={cat}
            className={`btn ${activeTab === cat ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="d-flex flex-column gap-3">
        {filteredSkills.map((s, i) => (
          <SkillBar key={i} {...s} data-aos="fade-up" data-aos-delay={i * 100} />
        ))}
      </div>
    </div>
  );
};

export default SkillTabs;
