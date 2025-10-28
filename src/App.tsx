import Header from "./components/Header";
import SearchAndCategories from "./components/SearchAndCategories";
import Products from "./components/Products";
function App() {
  return (
    <div className="flex flex-col items-center bg-[#f5f5bb] min-h-screen">
      <div className="bg-white p-6 lg:w-[50%] w-full shadow-2xl flex flex-col gap-3 ">
        <Header></Header>
        <SearchAndCategories></SearchAndCategories>
        <Products></Products>
      </div>
    </div>
  );
}

export default App;
