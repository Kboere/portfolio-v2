const H1 = ({ title, className = "" }) => {
    return (
      <h1 className={`font-body text-display -tracking-widest uppercase ${className}`}>
        {title}
      </h1>
    );
  };
  
  export default H1;
  