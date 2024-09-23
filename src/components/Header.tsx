export default function Header() {
  return (
    <>
      <div className="container mb-8">
        <div className="flex  items-center gap-6  mt-8">
          <button className="btn bg-neutral-200 p-2 rounded-md">Back</button>
          <p className="font-medium text-[#000] text-lg">
            Account verification
          </p>
          <button className="bg-[#f1f1fc] p-1 rounded-sm">
            <p className="text-[#6F6FFF]">In progress</p>
          </button>
        </div>
      </div>
      <hr className="text-[#000] " />
    </>
  );
}
