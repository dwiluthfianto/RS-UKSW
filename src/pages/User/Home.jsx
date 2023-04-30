import {
  Faq,
  Features,
  Header,
  News,
  Specialist,
  Step,
} from "../../features/components";

const Home = () => {
  return (
    <div>
      <Header />
      <Features />
      <Step />
      <Specialist />
      <News />
      <Faq />
    </div>
  );
};

export default Home;
