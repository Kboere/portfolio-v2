const Buttons = ({ buttons }) => {
    return (
      <div className="flex flex-row items-center">
        {buttons.map((item, index) => {
          const { url, target, title } = item.button;
          const buttonStyle = item.button_style || "btn-solid";
          return (
            <a
              key={index}
              href={url}
              target={target}
              className={`btn ${buttonStyle}`}
            >
              {title}
            </a>
          );
        })}
      </div>
    );
  };
  
  export default Buttons;
  