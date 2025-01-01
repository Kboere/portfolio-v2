const Buttons = ({ buttons }) => {
  return (
    <div className="flex flex-row items-center">
      {buttons.map((item, index) => {
        const { url, target, title } = item.button;
        const buttonStyle = item.button_style || "btn-solid";

        const buttonUrl = item.add_file ? item.add_file : url; 
        const downloadAttr = item.add_file ? "download" : null; 

        return (
          <a
            key={index}
            href={buttonUrl}
            target={target || "_self"} 
            className={`btn ${buttonStyle}`}
            download={downloadAttr}
          >
            {title}
          </a>
        );
      })}
    </div>
  );
};

export default Buttons;
