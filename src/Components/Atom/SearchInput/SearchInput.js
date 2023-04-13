import PropTypes from "prop-types";
import styles from "./SearchInput.module.scss";

const SearchInput = ({
  className,
  disable,
  error,
  onIconClick,
  classIcon,
  classError,
  shadow,
  hoverEffect = false,
  border = false,
  ...props
}) => {
  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      onIconClick();
    }
  };
  return (
    <div>
      <div
        className={`flex cursor-pointer rounded-[10px] box-content min-h-[40px] ${className} ${
          styles.inputContainer
        } bg-[#fff]  ${shadow && `${styles.shadow}`} ${
          hoverEffect &&
          `hover:border hover:border-solid hover:border-[#ADADAD] hover:shadow-[0_0_3px_0_rgba(0,0,0,0.161)] hover:transition-all hover:ease-in hover:duration-300 `
        } ${
          error &&
          `border border-solid border-[#E32B25] focus-within:border-[#E32B25]`
        }
      ${border && `border border-solid border-[#CCCCCC]`}`}
      >
        <input
          type="text"
          disabled={disable}
          onKeyDown={onKeyDown}
          className={`${styles.form_input} rounded-[10px] px-3.5 outline-none grow`}
          {...props}
        />

        {/* <button
          type="button"
          onClick={onIconClick}
          className={`icon-search flex flex-col justify-center text-[#404040] pr-3.5 cursor-pointer ${classIcon}`}
        ></button> */}
      </div>

      <p
        className={`text-[#E32B25] text-xs pl-3.5 mt-[3px] absolute ${classError}`}
      >
        {error ? error : ""}
      </p>
    </div>
  );
};

export default SearchInput;

SearchInput.propTypes = {
  className: PropTypes.string,
  classIcon: PropTypes.string,
  classError: PropTypes.string,
  disable: PropTypes.bool,
  shadow: PropTypes.bool,
  error: PropTypes.string,
  onIconClick: PropTypes.func,
  hoverEffect: PropTypes.bool,
  border: PropTypes.bool,
};
