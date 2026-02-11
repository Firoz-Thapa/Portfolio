import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiNetlify,
  SiLinux,
  SiGithub,
  SiDocker,
  SiJira,
  SiTeamcity,
} from "react-icons/si";

function Toolstack() {
  const tools = [
    { id: "linux", icon: SiLinux, name: "Linux", delay: "100" },
    { id: "vscode", icon: SiVisualstudiocode, name: "Visual Studio Code", delay: "200" },
    { id: "postman", icon: SiPostman, name: "Postman", delay: "300" },
    { id: "github", icon: SiGithub, name: "GitHub", delay: "400" },
    { id: "docker", icon: SiDocker, name: "Docker", delay: "500" },
    { id: "slack", icon: SiSlack, name: "Slack", delay: "600" },
    { id: "jira", icon: SiJira, name: "Jira", delay: "700" },
    { id: "netlify", icon: SiNetlify, name: "Netlify", delay: "700" },
    { id: "teamcity", icon: SiTeamcity, name: "TeamCity", delay: "800" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => {
        const Icon = tool.icon;
        return (
          <Col xs={4} md={2} key={tool.id} data-aos="flip-left" data-aos-delay={tool.delay} style={{ display: "flex", justifyContent: "center" }}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Icon title={tool.name} />
                </div>
                <div className="flip-card-back">
                  {tool.name}
                </div>
              </div>
            </div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Toolstack;