import Header from "./components/Header";
function App() {
  return (
    <div className="flex flex-col items-center bg-[#f5f5bb] h-screen">
      <div>
        <img
          className="rounded-md"
          src="https://placehold.co/1200x400"
          alt=""
        />
      </div>
      <div className="bg-white p-6 lg:w-[50%] w-full shadow-2xl ">
        <Header></Header>
      </div>
    </div>
  );
}

export default App;
