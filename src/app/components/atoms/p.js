const P = ({ text, className = "" }) => {
    return (
      <p className={`font-body ${className}`}>
        {text}
      </p>
    );
  };
  
  export default P;
  