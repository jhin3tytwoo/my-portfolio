// src/components/SkillIcon.js
"use client";
import Image from "next/image";
import { useState } from "react";

export default function SkillIcon({ icon, name }) {
  const [error, setError] = useState(false);

  return (
    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:animate-pulse">
      {!error ? (
        <Image
          src={icon}
          alt={name}
          width={48}
          height={48}
          className="w-full h-full object-contain"
          onError={() => setError(true)}
        />
      ) : (
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
      )}
    </div>
  );
}
