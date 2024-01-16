import ChipContainer from "./components/ChipContainer";

function App() {
  return (
    <div className="flex justify-center px-6 py-8">
      <div className="flex flex-col items-center w-full max-w-[800px]">
        <div className="font-semibold text-4xl text-zepto-purple">
          Pick Users
        </div>

        <div className="mt-6 w-full">
          <ChipContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
