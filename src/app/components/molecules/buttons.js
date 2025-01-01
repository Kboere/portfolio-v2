const Buttons = ({ buttons, file = "" }) => {
  return (
    <div className="flex flex-row items-center">
      {buttons.map((item, index) => {
        const { url, target, title } = item.button;
        const buttonStyle = item.button_style || "btn-solid";

        // Use file path for download if has_file is true; otherwise use URL
        const buttonUrl = item.has_file ? file : url; 
        const downloadAttr = item.has_file ? true : null; 

        return (
          <a
            key={index}
            href={buttonUrl}
            target={target || "_self"}
            className={`btn ${buttonStyle}`}
            {...(downloadAttr && { download: true })} // Add download attribute if necessary
          >
            {title}
          </a>
        );
      })}
    </div>
  );
};

export default Buttons;
