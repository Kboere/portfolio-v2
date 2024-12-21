const H4 = ({ title, className = "" }) => {
    return (
      <h4 className={`font-body text-h4 uppercase ${className}`}>
        {title}
      </h4>
    );
  };
  
  export default H4;
  