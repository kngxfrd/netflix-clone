import Moviecard from "./Moviecard";

function MovieRow() {
  return (
    <>
      <div className="pl-6 flex flex-row gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <Moviecard category="comedy" />
      </div>
      <div>
        <Moviecard category="horror" />
      </div>
    </>
  );
}

export default MovieRow;
