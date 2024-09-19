import { Slot } from "expo-router";
import { useState, useEffect } from "react";

export default function RootLayout() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 2000);
  }, []);

  if (!showContent) {
    return <>Loading...</>;
  }
  return <Slot />;
}
