import useOnlineStatus from "../hooks/useOnlineStatus";

const ShowOnlineStatus = () => {
  const isOnline = useOnlineStatus();
  console.log(isOnline);
  return <div>Online Status {isOnline ? "Online" : "Offline"}</div>;
};

export default ShowOnlineStatus;
