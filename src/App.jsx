import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import setupIndexedDB from "use-indexeddb";
import idbConfig from "./configs/idbConfig";
import { RecorderProvider } from "./contexts/RecorderContext";
import AppLayout from "./layouts/AppLayout";
import Records from "./pages/Records";
import Recorder from "./pages/Recorder";

function App() {
  useEffect(() => {
    return async () => {
      try {
        await setupIndexedDB(idbConfig);
      } catch (err) {
        console.error("error / unsupported", err);
      }
    };
  }, []);

  return (
    <AppLayout>
      <BrowserRouter>
        <RecorderProvider>
          <Routes>
            <Route path="/" element={<Records />} />
            <Route path="/record" element={<Recorder />} />
            <Route path="/*" element={<Records />} />
          </Routes>
        </RecorderProvider>
      </BrowserRouter>
    </AppLayout>
  );
}

export default App;
