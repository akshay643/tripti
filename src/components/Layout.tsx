import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { LiquidBackground } from './LiquidBackground';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-white">
      <LiquidBackground />
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};