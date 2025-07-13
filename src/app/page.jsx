"use client";

import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Github,
  ExternalLink,
  Code,
  Database,
  Server,
  Settings,
  MapPin,
  Calendar,
  Award,
  Star,
  Menu,
  X,
  FileDown,
  ArrowDownCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SkillIcon from "./components/SkillIcon";

export default function ModernPortfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = [
        "home",
        "experience",
        "projects",
        "skills",
        "education",
      ];
      const scrollY = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollY >= offsetTop - 100 &&
            scrollY < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = {
    Frontend: [
      { name: "Vue.js", icon: "/icons/vue.svg" },
      { name: "React.js", icon: "/icons/react.svg" },
      { name: "Next.js", icon: "/icons/nextjs.svg" },
      { name: "Angular", icon: "/icons/angular.svg" },
      { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      // javascript.svg,
    ],
    Backend: [
      { name: "Node.js", icon: "/icons/node.svg" },
      { name: "Express.js", icon: "/icons/express-js.png" },
      { name: "GraphQL", icon: "/icons/GraphQL.png" },
      { name: "Go", icon: "/icons/Go.svg" },
    ],
    Database: [
      { name: "MySQL", icon: "/icons/mysql.png" },
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "Postgresql", icon: "/icons/postgresql.svg" },
    ],
    Tools: [
      { name: "GitHub", icon: "/icons/github.svg" },
      { name: "Postman", icon: "/icons/postman.svg" },
      { name: "Figma", icon: "/icons/figma.png" },
      { name: "TypeScript", icon: "/icons/Typescript.png" },
    ],
  };

  const projects = [
    {
      title: "Weather Forecast",
      tech: "Vue.js, OpenWeatherMap API",
      description:
        "Real-time weather application with location-based forecasts, weather maps, and severe weather alerts.",
      highlight: "Real-time API integration with geolocation",
      link: "https://weather-app-mu-khaki-74.vercel.app/",
      image: "/image/Weather.png",
    },
    {
      title: "Fake Store",
      tech: "Nuxt 3, Pinia, Fake Store API",
      description:
        "An e-commerce showcase built with Nuxt 3 and Pinia, featuring product listings fetched from the Fake Store API. Includes product details, categories, and state management.",
      highlight: "API-driven product display with Pinia state management",
      link: "https://nuxt-fake-store.vercel.app/",
      image: "/image/Fake Store.png",
    },
  ];

  const getSectionIcon = (section) => {
    switch (section) {
      case "Frontend":
        return <Code className="w-5 h-5" />;
      case "Backend":
        return <Server className="w-5 h-5" />;
      case "Database":
        return <Database className="w-5 h-5" />;
      case "Tools":
        return <Settings className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-lg rounded-full px-6 py-3 shadow-lg border border-white/20">
        <div className="flex space-x-6">
          {["home", "experience", "projects", "skills", "education"].map(
            (section) => (
              <button
                key={section}
                onClick={() =>
                  document
                    .getElementById(section)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === section
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            )
          )}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-12 h-12 bg-white/90 backdrop-blur-lg rounded-full shadow-lg border border-white/20 flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            <div className="absolute top-16 right-0 bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-4 min-w-[200px]">
              <div className="flex flex-col space-y-2">
                {["home", "experience", "projects", "skills", "education"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => {
                        document
                          .getElementById(section)
                          ?.scrollIntoView({ behavior: "smooth" });
                        setIsMobileMenuOpen(false);
                      }}
                      className={`px-4 py-3 rounded-xl text-left font-medium transition-all duration-300 ${
                        activeSection === section
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  )
                )}
              </div>
            </div>
          </>
        )}
      </nav>

      <main className="pt-20">
        {/* home Section */}
        <section
          id="home"
          className={`px-4 sm:px-6 lg:px-8 py-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              {/* Profile Image with Animated Border */}
              <div className="relative inline-block mb-8">
                <div className="w-40 h-40 mx-auto rounded-full ">
                  {!imageError ? (
                    <Image
                      src="/profile.jpeg"
                      alt="Hanafi Yaming Profile"
                      width={128}
                      height={128}
                      className="w-full h-full rounded-full object-cover bg-white"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-4xl font-bold text-transparent bg-clip-text from-blue-600 to-purple-600">
                      H.Y
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Name and Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
                Hi, I'm
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Hanafi Yaming
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                A passionate{" "}
                <span className="font-semibold text-blue-600">
                  Full Stack Web Developer
                </span>
                with strong experience in both{" "}
                <span className="font-semibold text-blue-600">Frontend</span>{" "}
                and{" "}
                <span className="font-semibold text-green-600">Backend</span>{" "}
                technologies, specializing in{" "}
                <span className="font-semibold text-blue-600">Next.js</span>,{" "}
                <span className="font-semibold text-blue-600">React.js</span>,{" "}
                <span className="font-semibold text-green-600">Node.js</span>,
                and{" "}
                <span className="font-semibold text-green-600">MongoDB</span>.
                I'm open to Frontend, Backend, or Full Stack opportunities.
              </p>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <div className="flex items-center gap-2 text-gray-700 ">
                  <Phone className="w-5 h-5 group-hover:animate-pulse" />
                  <span className="text-lg">0941284680</span>
                </div>
                <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
                <div className="flex items-center gap-2 text-gray-700 ">
                  <Mail className="w-5 h-5 group-hover:animate-pulse" />
                  <span className="text-lg">hanafee.ym@gmail.com</span>
                </div>
              </div>
              <div className="flex justify-center flex-wrap gap-4">
                {/* GitHub Link */}
                <a
                  href="https://github.com/jhin3tytwoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  View My GitHub
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Resume Download Link */}
                <a
                  href="/Hanafi_yaming_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group"
                >
                  <FileDown className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Download Resume
                  <ArrowDownCircle className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="px-4 sm:px-6 lg:px-8 py-16 bg-white/50 backdrop-blur-sm"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              <Award className="w-8 h-8 text-blue-600" />
              <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <div className="bg-white rounded-3xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col items-center text-center gap-8">
                <div>
                  <div className="sticky top-32">
                    <Link
                      href="https://www.westerndigital.com/th-th/company"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-90 transition"
                    >
                      <Image
                        src="/image/western-digital.png"
                        alt="Western Digital Logo"
                        width={160}
                        height={80}
                        className="mb-4 object-contain mx-auto"
                      />
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-indigo-600 hover:underline">
                        Western Digital
                      </h3>
                      <div className="flex justify-center items-center gap-2 text-blue-600 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">
                          Sep 16, 2024 – Apr 8, 2025
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        Contract Duration: ~7 months
                      </p>
                    </Link>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <div className="prose prose-lg max-w-none text-left sm:text-center">
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Designed and developed a comprehensive{" "}
                      <strong className="text-blue-600">
                        preventive maintenance system
                      </strong>{" "}
                      using modern web technologies to streamline maintenance
                      operations and ensure compliance with maintenance
                      schedules.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6 mb-6 text-left sm:text-center">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                        <h4 className="font-semibold text-blue-900 mb-2">
                          Frontend Development
                        </h4>
                        <p className="text-blue-700 text-sm">
                          Built with Next.js for dynamic, responsive user
                          interfaces and optimal performance
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl">
                        <h4 className="font-semibold text-green-900 mb-2">
                          Backend Architecture
                        </h4>
                        <p className="text-green-700 text-sm">
                          Node.js backend handling data operations,
                          authentication, and business logic
                        </p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl">
                      <h4 className="font-semibold text-purple-900 mb-3">
                        Key Features Implemented
                      </h4>
                      <ul className="text-purple-700 text-sm space-y-2 list-disc list-inside">
                        <li>
                          Checklist-based interface for tracking maintenance
                          tasks
                        </li>
                        <li>
                          Real-time status updates and comprehensive reporting
                        </li>
                        <li>
                          User authentication and role-based access control
                        </li>
                        <li>
                          MongoDB integration for efficient data storage and
                          retrieval
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-purple-600" />
              <span className="bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <div className="flex items-center justify-center gap-8">
              {projects.map((project, index) => {
                const content = (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/20 group"
                  >
                    {/* ✅ แสดงรูปถ้ามี image */}
                    {project.image && (
                      <div className="mb-6 -mt-4 -mx-4">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={500}
                          height={400}
                          className="rounded-xl w-full h-auto object-contain"
                        />
                      </div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-blue-600 mb-3">
                        {project.tech}
                      </p>
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-2xl">
                      <p className="text-sm font-medium text-purple-700">
                        ✨ {project.highlight}
                      </p>
                    </div>
                  </div>
                );

                // ถ้ามีลิงก์ให้ครอบด้วย <a>
                return project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="px-4 sm:px-6 lg:px-8 py-16 bg-white/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
              <Code className="w-8 h-8 text-green-600" />
              <span className="bg-gradient-to-r from-gray-900 to-green-900 bg-clip-text text-transparent">
                Tech Stack
              </span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {Object.entries(skills).map(([category, items]) => (
                <div
                  key={category}
                  className="bg-white rounded-3xl p-8 shadow-xl border border-white/20"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white">
                      {getSectionIcon(category)}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {items.map((skill, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-100 group"
                      >
                        <SkillIcon icon={skill.icon} name={skill.name} />
                        <span className="text-sm font-medium text-gray-800 text-center group-hover:text-blue-600 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 flex items-center justify-center gap-3">
              <Award className="w-8 h-8 text-indigo-600" />
              <span className="bg-gradient-to-r from-gray-900 to-indigo-900 bg-clip-text text-transparent">
                Education
              </span>
            </h2>

            <div className="bg-white rounded-3xl p-12 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500">
              <Image
                src="/icons/walailak.png"
                alt="Walailak University Logo"
                width={40}
                height={40}
                className="w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8"
              />

              <a
                href="https://www.wu.ac.th/th"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-3xl font-bold text-gray-900 hover:text-indigo-600 transition-colors mb-4 hover:underline"
              >
                Walailak University
              </a>

              <p className="text-xl text-gray-600 mb-6">
                Computer Engineering and Artificial Intelligence
              </p>

              <div className="flex items-center justify-center gap-2 text-indigo-600">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Thailand</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
              <p className="text-gray-300 mb-6">
                "Ready to work with a great team and build exciting projects."
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
                  <Mail className="w-5 h-5 group-hover:animate-pulse" />
                  <span>hanafee.ym@gmail.com</span>
                </div>
                <a
                  href="https://github.com/jhin3tytwoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
                >
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>GitHub Profile</span>
                </a>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-400">
                © 2025 Hanafi Yaming. Crafted with ❤️ using Next.js & Tailwind
                CSS.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
