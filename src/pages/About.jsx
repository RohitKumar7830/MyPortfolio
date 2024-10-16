import AboutIntro from "../component/AboutPage/AboutIntro";
import ContactBanner2 from "../component/AboutPage/ContactBanner2";
import Education from "../component/AboutPage/Education";
import MyExperience from "../component/AboutPage/MyExperience";

export default function About() {
  return (
    <div>
      <AboutIntro />
      <Education />
      <MyExperience />
      <ContactBanner2 />
    </div>
  );
}
