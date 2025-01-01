const H5 = ({ title, className = "" }) => {
    return (
      <h4 className={`font-body text-h5 uppercase ${className}`}>
        {title}
      </h4>
    );
  };
  
  export default H5;