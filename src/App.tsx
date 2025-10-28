import Header from "./components/Header";
import SearchAndCategories from "./components/SearchAndCategories";
function App() {
  return (
    <div className="flex flex-col items-center bg-[#f5f5bb] min-h-screen">
      <div>
        <img
          className="rounded-md"
          src="https://placehold.co/1200x400"
          alt=""
        />
      </div>
      <div className="bg-white p-6 lg:w-[50%] w-full shadow-2xl flex flex-col gap-3 ">
        <Header></Header>
        <SearchAndCategories></SearchAndCategories>
      </div>
    </div>
  );
}

export default App;
