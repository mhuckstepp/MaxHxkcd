import useLocalStorage from "./useLocalStorage";

export default function useDarkMode() {
  const [darkOn, setDarkOn] = useLocalStorage("Dark Mode", false);
  return [darkOn, setDarkOn];
}
