import UserClass from "./Userclass";
import Userdetail from "./Userfunc";
const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <div className="about-card">
        <UserClass
          Name={"Ankur Sharma"}
          Location={"New Delhi"}
          salary={100002}
        />
        <Userdetail
          email={<a href="https://gmail.com/">ankursharma.as29@gmail.com</a>}
          phone={"+91-" + 9690258197}
        />
      </div>
    </div>
  );
};
export default About;
