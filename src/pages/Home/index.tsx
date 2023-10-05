import { FilterPanel, List, SearchBar } from "../../components/Home/index";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      {/* Search Bar */}
      <SearchBar />
      <div className="home__panelList-wrap">
        {/* Side Panels */}
        <div className="home__panel-wrapper">
          <FilterPanel />
        </div>
        <div className="home__list-wrapper">
          {/* List & Empty View */}
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
