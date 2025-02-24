import { useCallback, useEffect } from "react";
import { useRef, useState } from "react";
import { HiDownload, HiTrash } from "react-icons/hi";
import { useRecorderContext } from "../contexts/RecorderContext";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

function ContextMenu({ className, icon, src, audio }) {
  const [showMenu, setShowMenu] = useState(false);
  const { deleteByID, getAll, setAudios } = useRecorderContext();
  const menuRef = useRef();

  const liStyles =
    "flex items-center justify-start gap-2 py-3 ps-3 pe-8 hover:bg-gray-100";
  const iconStyles = "!text-black";

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuRef, showMenu]);

  function handleClick() {
    setShowMenu((menu) => !menu);
  }

  function handleDownload() {
    const audioUrl = src;
    const link = document.createElement("a");
    link.href = audioUrl;
    link.download = "audio.webm";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const deleteAudio = useCallback(
    async (id) => {
      if (!id) return;
      try {
        await deleteByID(id);
        const data = await getAll();
        setAudios(data);
        toast.success("Audio deleted");
      } catch (error) {
        console.error("Delete error:", error);
        toast.error("Error deleting audio");
      }
    },
    [deleteByID, getAll, setAudios],
  );

  return (
    <button
      ref={menuRef}
      onClick={handleClick}
      className={`relative ${className}`}
    >
      {icon}
      <AnimatePresence>
        {showMenu && (
          <motion.ul
            className="absolute z-10 space-y-2 rounded-md bg-white py-2 text-sm font-semibold text-black shadow"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <li className={liStyles} onClick={handleDownload}>
              <HiDownload className={iconStyles} />
              Download
            </li>
            <li className={liStyles} onClick={() => deleteAudio(audio.id)}>
              <HiTrash className={iconStyles} />
              Delete
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </button>
  );
}

export default ContextMenu;
