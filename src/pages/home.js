import bg from "../assets/homebg.jpg";

const Home = () => {
  return (
    <section
      className="flex w-full min-h-screen laptop:p-[100px] tablet:p-[60px] phone:p-3"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex justify-start">
        <h1 className="text-6xl font-bold text-purple-800">
          Welcome to Job Freak!
        </h1>
      </div>
    </section>
  );
};

export default Home;
