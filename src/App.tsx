import Header from "./components/Header";
import SearchAndCategories from "./components/SearchAndCategories";
import Products from "./components/Products";
import StickCategories from "./components/StickCategories";
import BottomStick from "./components/BottomStick";
import Single from "./components/Single";

function App() {
  return (
    <div className="overflow-y-hidden">
      <StickCategories></StickCategories>
      <div className="flex flex-col items-center bg-slate-50 min-h-screen">
        <div className="bg-white p-6 lg:w-[50%] w-full shadow-2xl flex flex-col gap-3 ">
          <Header></Header>
          <SearchAndCategories></SearchAndCategories>
          <Products></Products>
        </div>
      </div>
      <BottomStick></BottomStick>
      <Single />
    </div>
  );
}

export default App;
