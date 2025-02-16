import { HiOutlineMicrophone } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import RecordsList from "../components/RecordsList";
import { motion } from "framer-motion";

function Records() {
  const navigate = useNavigate();

  return (
    <>
      <Header>Recordings</Header>
      <RecordsList />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-purple-500 px-5 py-2 text-[20px] text-white shadow"
        onClick={() => navigate("/record")}
      >
        <HiOutlineMicrophone /> Record
      </motion.button>
    </>
  );
}

export default Records;
