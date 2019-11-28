export default function onEnter(handler: () => void) {
  return (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handler();
    }
  };
}