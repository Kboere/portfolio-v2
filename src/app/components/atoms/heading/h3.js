const H3 = ({ title, className = "" }) => {
    return (
      <h3 className={`font-body text-h3 uppercase ${className}`}>
        {title}
      </h3>
    );
  };
  
  export default H3;
  