function RecordButton({
  children,
  onClick,
  isRecording = false,
  isPaused = false,
  disabled,
}) {
  return (
    <div className="relative">
      <button
        disabled={disabled}
        onClick={onClick}
        className="relative z-10 rounded-full border-8 border-purple-600 bg-purple-500 p-18 text-7xl text-white sm:p-12"
      >
        {children}
      </button>
      {isRecording && !isPaused && (
        <div className="absolute top-0 left-0 z-0 h-full w-full animate-ping rounded-full bg-purple-500"></div>
      )}
    </div>
  );
}

export default RecordButton;
