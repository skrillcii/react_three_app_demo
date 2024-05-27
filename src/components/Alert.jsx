const Alert = ({ type, text }) => {
  return (
    <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
      <div className={`${type === "danger"} ? 'bg-red-500' : 'bg-blud-500'`}>
        Alert Test
      </div>
    </div>
  );
};

export default Alert;
