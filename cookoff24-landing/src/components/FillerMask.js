import { useAppContext } from "@/context/appContext";

const FillerMask = () => {
    const {setIsHoveredOnSmall} = useAppContext();
  return (
    <div className="h-[700vh] bg-orange pl-36">
    </div>
  );
};

export default FillerMask;
