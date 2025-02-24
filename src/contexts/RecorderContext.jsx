import { createContext, useContext, useEffect, useState } from "react";
import { useAudioRecorder } from "react-audio-voice-recorder";
import toast from "react-hot-toast";
import { useIndexedDBStore } from "use-indexeddb";

const RecorderContext = createContext();

export function RecorderProvider({ children }) {
  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    recordingTime,
    isPaused,
    mediaRecorder,
  } = useAudioRecorder();

  const [audios, setAudios] = useState([]);
  const { getAll, add, deleteByID } = useIndexedDBStore("audios");

  useEffect(() => {
    if (!recordingBlob) return;

    const reader = new FileReader();

    reader.readAsDataURL(recordingBlob);
    reader.onloadend = async () => {
      const base64Audio = reader.result;
      try {
        await add({ src: base64Audio, createdAt: new Date() });
        toast.success("Audio saved");
      } catch (err) {
        toast.error(err);
      }
    };

    return () => {
      reader.abort();
    };
  }, [recordingBlob, add]);

  return (
    <RecorderContext.Provider
      value={{
        audios,
        setAudios,
        startRecording,
        stopRecording,
        togglePauseResume,
        recordingBlob,
        isRecording,
        recordingTime,
        isPaused,
        mediaRecorder,
        getAll,
        add,
        deleteByID,
      }}
    >
      {children}
    </RecorderContext.Provider>
  );
}

export function useRecorderContext() {
  const context = useContext(RecorderContext);
  if (!context)
    throw new Error(
      "useRecorderContext must be used within a RecorderProvider",
    );
  return context;
}
