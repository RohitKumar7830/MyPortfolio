import BasicAbout from "../component/HomePage/BasicAbout";
import Certifications from "../component/HomePage/Certifications";
import ContactBanner from "../component/HomePage/ContactBanner";
import Experience from "../component/HomePage/Experience";
import Intro from "../component/HomePage/Intro";
import MainProject from "../component/HomePage/MainProject";
import SocialMedia from "../component/HomePage/SocialMedia";
import TopProjects from "../component/HomePage/TopProjects";

export default function Home() {
  return (
    <div>
      <Intro />
      <BasicAbout />
      <Experience />
      <Certifications />
      <MainProject />
      <TopProjects />
      <SocialMedia />
      <ContactBanner />
    </div>
  );
}
