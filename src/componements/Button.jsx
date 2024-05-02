import { useRef } from "react";
import { FocusRing } from "react-focus-rings";

const Button = (props) => {
  const {
    size = Button.Sizes.MEDIUM,
    color = Button.Colors.PRIMARY,
    type = "button",
  } = props;

  const Colors = {}

  /** swap the colors to get the right hover classname */
  for (let key in Button.Colors) {
    Colors[Button.Colors[key]] = key 
  }

  const container = useRef(null);
  const hover = `${Button.Hovers[Colors[color]]}`

  return (
    <div ref={container}>
      <FocusRing containerRef={container}>
        <button
          type={type}
          className={`${size} ${color} ${hover} Button`}
          {...props}
        >
          {props.children}
        </button>
      </FocusRing>
    </div>
  );
};


Button.Colors = {
  BRAND: "Button_colorBrand",
  RED: "Button_colorRed",
  GREEN: "Button_colorGreen",
  YELLOW: "Button_colorYellow",
  PRIMARY: "Button_colorPrimary",
  LINK: "Button_colorLink",
  WHITE: "Button_colorWhite",
  TRANSPARENT: "Button_colorTransparent",
  BRAND_NEW: "Button_colorBrandNew",
  CUSTOM: "",
};

Button.Sizes = {
  NONE: "",
  TINY: "sizeTiny",
  SMALL: "sizeSmall",
  MEDIUM: "sizeMedium",
  LARGE: "sizeLarge",
  XLARGE: "sizeXlarge",
  MIN: "sizeMin",
  MAX: "sizeMax",
  ICON: "sizeIcon",
};

Button.Hovers = {
  DEFAULT: "",
  BRAND: "Button_hoverBrand",
  BRAND_NEW: "Button_hoverBrand",
  RED: "Button_hoverRed",
  GREEN: "Button_hoverGreen",
  YELLOW: "Button_hoverYellow",
  PRIMARY: "Button_hoverPrimary",
  LINK: "Button_hoverLink",
  WHITE: "Button_hoverWhite",
  BLACK: "__invalid_hoverBlack",
  TRANSPARENT: "Button_hoverTransparent",
};

Button.BorderColors = {
  BRAND: "Button_borderBrand",
  RED: "Button_borderRed",
  GREEN: "Button_borderGreen",
  YELLOW: "Button_borderYellow",
  PRIMARY: "Button_borderPrimary",
  LINK: "Button_borderLink",
  WHITE: "Button_borderWhite",
  BLACK: "__invalid_borderBlack",
  TRANSPARENT: "Button_borderTransparent",
  BRAND_NEW: "Button_borderBrandNew",
};

export default Button;
