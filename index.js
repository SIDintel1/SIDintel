import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function SIDIntel() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <header className="p-5 bg-gray-800 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SIDIntel</h1>
          <nav>
            <Link to="/" className="mx-2">Home</Link>
            <Link to="/reports" className="mx-2">Reports</Link>
            <Link to="/subscribe" className="mx-2">Subscribe</Link>
            <Link to="/contact" className="mx-2">Contact</Link>
          </nav>
        </header>
        <main className="p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">Welcome to SIDIntel</h2>
      <p className="mt-2">Your source for strategic intelligence and global insights.</p>
    </div>
  );
}

function Reports() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Intelligence Reports</h2>
      <p className="mt-2">Exclusive intelligence analysis and reports.</p>
    </div>
  );
}

function Subscribe() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Subscribe for Premium Access</h2>
      <Button className="mt-4">Join Now</Button>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p className="mt-2">Reach out for consulting or intelligence briefings.</p>
    </div>
  );
}

