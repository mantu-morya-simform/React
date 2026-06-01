import useClipboard from "../hooks/useClipboard";

function ClipboardDemo() {
  const { copied, copy } = useClipboard();

  return (
    <div>
      <button onClick={() => copy("React Hooks")}>Copy Text</button>
      {copied && <p>Copied!</p>}
    </div>
  );
}

export default ClipboardDemo;
