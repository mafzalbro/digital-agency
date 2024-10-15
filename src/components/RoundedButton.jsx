const RoundedButton = ({children, className}) => {
  return (
    <button className={className + ' hover:scale-95 rounded-[25px_20px_30px_15px]'}>
      {children}
    </button>
  );
};

export default RoundedButton;
