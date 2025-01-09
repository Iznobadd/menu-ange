import ListFlags from "../components/listFlags";

const Language = () => {
  return (
    <div className="relative w-screen h-screen">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 top-1/2">
        <ListFlags />
      </div>
    </div>
  );
};

export default Language;
