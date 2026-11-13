import Header from "./components/layout/Header.tsx";
import {Route, Routes} from "react-router-dom";
import NotesPage from "./components/pages/NotesPage.tsx";
import NoteDetailPage from "./components/pages/NoteDetailPage.tsx";
import NotFoundPage from "./components/pages/NotFoundPage.tsx";

const App = () => {
  return (
      <>
        <Header />

        <Routes>
          <Route path="/" element={<NotesPage />} />
          <Route path="/notes/:id" element={<NoteDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </>
  );
};

export default App;
