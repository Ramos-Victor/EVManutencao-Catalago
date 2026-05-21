import { useEffect, useState } from "react";

function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-wrapper ${hide ? "hide" : ""}`}>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;
