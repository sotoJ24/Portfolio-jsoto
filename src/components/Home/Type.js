import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "Web3 Developer",
          "Dojo Coding Community",
          "Open Source Contributor / OnlyDust",
          "Dapps",
          "Backend / Frontend",
          "Database Dev"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
