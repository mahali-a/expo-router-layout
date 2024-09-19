import { Slot } from "expo-router";
import { useState, useEffect } from "react";

const getAuthenticatedState = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });

export default function Layout() {
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const initAuth = async () => {
      await getAuthenticatedState();
      setIsAuthReady(true);
    };

    initAuth();
  }, []);

  if (!isAuthReady) {
    return null;
  }

  return <Slot />;
}
