import { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Card";

export default function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }
  

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center dark:bg-gray-400 transition duration-700 ease-in-out">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn></ThemeBtn>
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card></Card>
          </div>
        </div>

      </div>
    </ThemeProvider>
  )
}