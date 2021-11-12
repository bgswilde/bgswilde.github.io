import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";


function App() {
  const [pages] = useState([
    { title: 'about' },
    { title: 'portfolio' },
    { title: 'resume' },
    { title: 'contact' }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
      <div className="app">
        <div className="content-wrap">
          <Nav 
            pages={pages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          ></Nav>
          <main>
            <div className="container">
              {currentPage.title === 'about' && <About />}
              {currentPage.title === 'portfolio' && <Portfolio />}
              {currentPage.title === 'resume' && <Resume />}
              {currentPage.title === 'contact' && <Contact />}
            </div>
          </main>
        </div>
        <Footer />
      </div>
  );
}

export default App;
