import useOnlineStatus from "../hooks/useOnlineStatus";

function Status() {
  const { isOnline, toggleAvailable } = useOnlineStatus();

  function handleClick() {
    toggleAvailable();
  }

  return (
    <>
      <button onClick={handleClick}>
        {isOnline ? "Make Offline" : "Make Online"}
      </button>
      <h2>{isOnline ? "Online" : "Offline"}</h2>
    </>
  );
}

export default Status;
