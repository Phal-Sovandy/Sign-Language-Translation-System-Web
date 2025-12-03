import React from "react";

/**
 * SecurityIcons Component
 * Displays floating security icons for Secure Processing feature
 */
const SecurityIcons = React.memo(() => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      {/* Icon 1 - Database/Stack */}
      <div className="absolute top-[-100px] lg:top-[-100px] left-[50px] lg:left-[-300px] md:-top-40 md:left-35">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="360"
          height="360"
          viewBox="0 0 24 24"
          className="text-white rotate-[-8deg] hover:scale-110 transition-transform drop-shadow-[0_8px_30px_rgba(47,107,255,0.4)]"
        >
          <path
            fill="currentColor"
            d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4s8-1.79 8-4s-3.58-4-8-4M4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4m0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4"
          />
        </svg>
      </div>

      {/* Icon 2 - Lock */}
      <div className="absolute top-[50px] lg:top-[-100px] right-[-20px] lg:right-[-120px] md:top-36 md:right-26">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="300"
          viewBox="0 0 24 24"
          className="text-white rotate-[12deg] hover:scale-110 transition-transform drop-shadow-[0_8px_30px_rgba(47,107,255,0.4)]"
        >
          <path
            fill="currentColor"
            d="M19 10h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 14 0zm-2 0V9A5 5 0 0 0 7 9v1zm-6 4v4h2v-4z"
          />
        </svg>
      </div>

      {/* Icon 3 - Shield */}
      <div className="absolute bottom-[10px] lg:bottom-[-80px] left-[-20px] lg:left-[50px] md:bottom-4 md:left-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="180"
          height="180"
          viewBox="0 0 24 24"
          className="text-white rotate-[-5deg] hover:scale-110 transition-transform lg:drop-shadow-[0_8px_30px_rgba(47,107,255,0.4)] drop-shadow-[0_8px_30px_rgba(47,107,255,0.8)]"
        >
          <path
            fill="currentColor"
            d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11z"
          />
        </svg>
      </div>

      {/* Icon 4 - User/Profile */}
      <div className="absolute lg:bottom-[-100px] bottom-[-30px] lg:right-40 right-[50px] md:bottom-56 md:right-22">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="240"
          height="240"
          viewBox="0 0 32 32"
          className="text-white rotate-[15deg] hover:scale-110 transition-transform lg:drop-shadow-[0_8px_30px_rgba(47,107,255,0.4)] drop-shadow-[0_8px_30px_rgba(47,107,255,0.8)]"
        >
          <path
            fill="currentColor"
            d="M16 22a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2M14 6h4v2h-4z"
          />
          <path
            fill="currentColor"
            d="M24 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2.003 2.003 0 0 0 2-2V4a2 2 0 0 0-2-2m-4 26h-8v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm2 0v-2a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v2H8V4h16v24Z"
          />
        </svg>
      </div>
    </div>
  );
});

SecurityIcons.displayName = "SecurityIcons";

export default SecurityIcons;
