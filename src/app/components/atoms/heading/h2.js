const H2 = ({ title, className = "" }) => {
    return (
      <h2 className={`font-body text-h2 ${className}`}>
        {title}
      </h2>
    );
  };
  
  export default H2;
  