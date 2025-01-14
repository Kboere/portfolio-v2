const Buttons = ({ buttons, file = "" }) => (
  <div className="flex flex-row items-center">
    {buttons.map(({ button: { url, target, title }, button_style, has_file }) => {
      const buttonUrl = has_file ? file : url;
      return (
        <a
          key={title}
          href={buttonUrl}
          target={target || "_self"}
          className={`btn ${button_style || "btn-solid"}`}
          download={has_file ? true : null}
        >
          {title}
        </a>
      );
    })}
  </div>
);

export default Buttons;
