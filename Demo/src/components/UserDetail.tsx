function UserDetail({ name, isOnline, hideOffline }) {
  if (hideOffline && !isOnline) return;
  return (
    <div>
      <h2>{name}</h2>
      <span>{isOnline ? "Online" : "Offline"}</span>
      <h2>{isOnline ? "Available to Chat" : "Not Available"}</h2>
      {isOnline ? (
        <button>Send Message</button>
      ) : (
        <small>Check Back Later</small>
      )}
    </div>
  );
}

export default UserDetail;
