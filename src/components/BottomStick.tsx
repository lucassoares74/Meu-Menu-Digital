import { BookOpenText, NotebookPen } from "lucide-react";
function BottomStick() {
  return (
    <div className="sticky bottom-0 flex justify-center bg-slate-50">
      <div className="bg-white w-full md:w-[50%] border p-2 rounded-md flex gap-4 justify-center">
        <BookOpenText></BookOpenText>
        <NotebookPen />
      </div>
    </div>
  );
}

export default BottomStick;
