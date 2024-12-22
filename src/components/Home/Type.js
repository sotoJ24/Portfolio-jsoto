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
          "Open Source Contributor / OnlyDust",
          "Decentralization",
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
