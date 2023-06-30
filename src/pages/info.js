import React from "react";
import blob from "../assets/info blob.png";

const Info = () => {
  return (
    <section className="flex w-full min-h-screen laptop:p-[100px] tablet:p-[60px] phone:p-3">
      <div className="grid grid-cols-2 tablet:grid-cols-1 phone:grid-cols-1">
        <div className="flex justify-start">
          <p className="text-lg text-purple-900 font-medium leading-10">
            Job Freak is a software solution company that specializes in hiring
            interns and employees for various industries. With a focus on
            streamlining the recruitment process, Job Freak offers innovative
            technology solutions to connect job seekers with employers. Their
            platform provides a user-friendly interface where job seekers can
            create profiles, upload resumes, and browse through a wide range of
            internship and job opportunities. For employers, Job Freak offers a
            comprehensive hiring system that allows them to post job listings,
            screen and evaluate candidates, and manage the entire recruitment
            process efficiently. Their software solution incorporates advanced
            features such as automated resume parsing, applicant tracking, and
            interview scheduling to simplify the hiring workflow. Job Freak's
            mission is to bridge the gap between talented individuals seeking
            internships or job opportunities and organizations looking to hire
            skilled professionals. By leveraging cutting-edge technology, Job
            Freak aims to make the job search and hiring process more efficient,
            cost-effective, and accessible for both job seekers and employers in
            today's competitive market.
          </p>
        </div>
        <div className="w-[80%] h-[80%]">
          <img src={blob} alt="blob" />
        </div>
      </div>
    </section>
  );
};

export default Info;
