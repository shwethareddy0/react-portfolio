import React from "react";

//About me component with avatar
function AboutMe() {
  return (
    <div className="text-left section">
      <h4>About me</h4>
      <br />
      <img src="./avatar.png" alt="avatar" height={80} width={80} />
      <br />
      <br />
      <p>
        Student at UC Berkeley Boot Camps. Human Resource professional with 5
        years of experience in all the core Human Resource operations that
        includes Recruitment & Selection, Employee Relations, Payrolls and
        Performance Management.
      </p>
    </div>
  );
}
export default AboutMe;
