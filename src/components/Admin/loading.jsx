const Loading = ({ value }) => {
  return (
    <div className={`${!value ? "loading-hidden" : ""} loading `}>
      <div></div>
    </div>
  );
};

export default Loading;
