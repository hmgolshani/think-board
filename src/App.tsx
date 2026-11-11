import Header from "./components/layout/Header.tsx";
import {Route, Routes} from "react-router-dom";
import NotesPage from "./pages/NotesPage.tsx";
import NoteDetailPage from "./pages/NoteDetailPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

const App = () => {
  return (
      <>
        <Header onNewNote={()=> console.log('new note')} />

        <Routes>
          <Route path="/" element={<NotesPage />} />
          <Route path="/notes/:id" element={<NoteDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

      </>
  );
};

export default App;
