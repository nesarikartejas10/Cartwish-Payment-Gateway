import FilterBar from "./filterBar/FilterBar";
import Main from "./main/Main";

const Home = () => {
  return (
    <div className="flex">
      <FilterBar />
      <Main />
    </div>
  );
};

export default Home;
