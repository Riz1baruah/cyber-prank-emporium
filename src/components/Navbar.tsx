
import { Eye, Zap, Brain, Home } from "lucide-react";
import { NavBar } from "./ui/tubelight-navbar";

const navItems = [
  { name: 'Home', url: '/', icon: Home },
  { name: 'Robotic Eyes', url: '/categories/eyes', icon: Eye },
  { name: 'Speedster Legs', url: '/categories/legs', icon: Zap },
  { name: 'Brain Chips', url: '/categories/brain', icon: Brain },
];

export default function Navbar() {
  return (
    <NavBar items={navItems} />
  );
}
