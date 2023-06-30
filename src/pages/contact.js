import React from "react";

const Contact = () => {
  return (
    <section className="flex w-full min-h-screen laptop:p-[100px] tablet:p-[60px] phone:p-3 justify-center items-center">
      <div
        className="flex flex-col border-[3px] border-purple-900/20 p-[50px] 
      justify-start items-center gap-5"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-xl font-medium">
            Email:
          </label>
          <input
            type="text"
            placeholder="Enter Your mail"
            name="email"
            className="py-2 px-7 rounded-xl shadow-2xl border-[1.5px]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-xl font-medium">
            Message:
          </label>
          <input
            type="text"
            placeholder="Enter Your Message"
            name="message"
            className="py-2 px-7 rounded-xl shadow-2xl border-[1.5px]"
          />
        </div>
        <div>
          <button
            className="py-2 px-10 text-white bg-purple-900 font-medium 
          rounded-xl shadow-2xl cursor-pointer"
          >
            Send
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
