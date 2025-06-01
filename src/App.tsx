import React, { useState } from 'react';
import { DocumentIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

interface TableOfContents {
  chapter: number;
  title: string;
  page: number;
}

const hardcodedTOC: TableOfContents[] = [
  { chapter: 1, title: "Relativity I", page: 1 },
  { chapter: 2, title: "Relativity II", page: 41 },
  { chapter: 3, title: "The Quantum Theory of Light", page: 65 },
  { chapter: 4, title: "The Particle Nature of Matter", page: 106 },
  { chapter: 5, title: "Matter Waves", page: 151 },
  { chapter: 6, title: "Quantum Mechanics in One Dimension", page: 191 },
  { chapter: 7, title: "Tunneling Phenomena", page: 231 },
  { chapter: 8, title: "Quantum Mechanics in Three Dimensions", page: 260 },
  { chapter: 9, title: "Atomic Structure", page: 295 },
  { chapter: 10, title: "Statistical Physics", page: 334 },
  { chapter: 11, title: "Molecular Structure", page: 372 },
  { chapter: 12, title: "The Solid State", page: 404 },
  { chapter: 13, title: "Nuclear Structure", page: 463 },
  { chapter: 14, title: "Nuclear Physics Applications", page: 503 },
  { chapter: 15, title: "Elementary Particles", page: 547 },
  { chapter: 16, title: "Cosmology (Web Only)", page: 0 },
];

const appendices = [
  "Appendix A Best Known Values for Physical Constants A.1",
  "Appendix B Table of Selected Atomic Masses A.2",
  "Appendix C Nobel Prizes A.7",
  "Answers to Odd-Numbered Problems A.12"
];

function UploadPage() {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.type === 'application/pdf') {
        navigate('/toc');
      } else {
        alert('Please upload a PDF file');
      }
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'application/pdf') {
        navigate('/toc');
      } else {
        alert('Please upload a PDF file');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
        <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Physics Textbook TOC
        </h1>
        
        <div 
          className={`border-2 border-dashed rounded-2xl p-12 transition-all duration-300 ${
            isDragging 
              ? 'border-indigo-500 bg-indigo-50/50 scale-105' 
              : 'border-gray-300 hover:border-indigo-400 hover:bg-gray-50/50'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="transform transition-transform duration-200 hover:scale-110">
              <DocumentIcon className="w-20 h-20 mb-6 text-indigo-500" />
            </div>
            <p className="text-2xl font-medium text-gray-700 mb-3">
              Drag and drop your PDF here
            </p>
            <p className="text-gray-500 mb-8">
              or
            </p>
            <label className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95">
              Browse Files
              <input
                type="file"
                className="hidden"
                accept=".pdf"
                onChange={handleFileChange}
              />
            </label>
            <p className="mt-6 text-sm text-gray-500">
              Only PDF files are accepted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TOCPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors duration-200 transform hover:scale-105 active:scale-95"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Back to Upload
          </button>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Table of Contents
          </h1>
          <div className="w-24"></div> {/* Spacer for alignment */}
        </div>
        
        <div className="space-y-4">
          {hardcodedTOC.map((item, index) => (
            <div 
              key={item.chapter}
              className="flex items-baseline p-4 hover:bg-indigo-50/50 rounded-xl transition-all duration-200 group transform hover:scale-[1.02] hover:translate-x-2"
            >
              <span className="w-16 font-bold text-indigo-600 group-hover:text-indigo-700">
                Chapter {item.chapter}
              </span>
              <span className="flex-grow text-lg text-gray-700 group-hover:text-gray-900">
                {item.title}
              </span>
              {item.page > 0 && (
                <span className="ml-4 text-gray-500 font-medium group-hover:text-gray-700">
                  {item.page}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Appendices</h2>
          <div className="space-y-4">
            {appendices.map((appendix, index) => (
              <div 
                key={index}
                className="p-4 hover:bg-indigo-50/50 rounded-xl transition-all duration-200 group transform hover:scale-[1.02] hover:translate-x-2"
              >
                <span className="text-gray-700 group-hover:text-gray-900">{appendix}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UploadPage />} />
        <Route path="/toc" element={<TOCPage />} />
      </Routes>
    </Router>
  );
}

export default App; 