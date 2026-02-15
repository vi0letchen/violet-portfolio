export default function Navbar() {
  return (
    <nav className=" font-mono flex items-center justify-between fixed top-0 left-0 w-full h-15 bg-background/80 shadow-md backdrop-blur-lg z-50">
      <h1 className="text-xl font-bold ml-30 text-title">&lt;VioletChen/&gt;</h1>
      <div className="flex gap-4 mr-30 text-text">
        <a href="#home">Home</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
      </div>
    </nav>
  );
}
