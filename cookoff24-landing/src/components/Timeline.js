import { color, motion, easeInOut } from "framer-motion";

const Timeline = () => {
  const events = [
    { time: "09:00 AM", event: "Event Starts" },
    { time: "10:00 AM", event: "Placeholder" },
    { time: "11:00 AM", event: "Placeholder" },
    { time: "12:00 PM", event: "Placeholder" },
    { time: "02:00 PM", event: "Event Commences" },
  ];
  console.log(100 / events.length);
  return (
    <div className="h-[100vh] w-[100vw] relative xs:my-10" id="timeline">
      <div
        id="proxima"
        className="text-[16px] md:text-[12px] font-normal tracking-[7px] mx-[13%] md:mx-[10%] text-grey pt-2"
      >
        TIMELINE
      </div>
      <div id="proximaBold" className="flex flex-col h-[85%] mt-10">
        {events.map((e, index) => {
          return (
            <motion.div
              key={index}
              // className={`flex ml-40 h-[20%]`}
              className={`flex justify-between mx-auto sm:ml-2 sm:gap-[20vw] xs:text-xl h-[${
                100 / events.length
              }%] border-b-[2px] border-neutral-600 w-[75%] md:w-full gap-44 text-grey text-3xl font-semibold z-20 px-10`}
              whileHover={{
                backgroundColor: "#EB5939",
                color: "rgb(13,13,13)",
              }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <div className=" flex flex-col justify-center">{e.time}</div>
              <div className="flex flex-col justify-center pr-10">
                {e.event}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;