import { HiPause, HiPlay } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { useRecorderContext } from "../contexts/RecorderContext";

function RecorderActions() {
  const {
    togglePauseResume,
    stopRecording,
    isPaused,
    isRecording,
    setDiscard,
  } = useRecorderContext();

  const toggleBtnClasses =
    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-purple-500 ";

  function handlePause() {
    if (!isRecording) return;
    togglePauseResume();
  }

  function handleDiscard() {
    setDiscard(true);
    stopRecording();
  }

  return (
    <AnimatePresence>
      <motion.div
        className="relative flex w-full justify-between rounded-full bg-purple-100 px-1 font-bold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative flex w-full justify-between rounded-full bg-purple-100 px-1 font-bold">
          <button
            onClick={handleDiscard}
            disabled={true}
            className="px-2 py-1"
            title="Soon"
          >
            Discard
          </button>

          <button onClick={handlePause} disabled={!isRecording}>
            {!isPaused ? (
              <HiPause className={toggleBtnClasses} />
            ) : (
              <HiPlay className={toggleBtnClasses} />
            )}
          </button>

          <button
            className="px-2 py-1"
            disabled={!isRecording}
            onClick={stopRecording}
          >
            Save
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default RecorderActions;
