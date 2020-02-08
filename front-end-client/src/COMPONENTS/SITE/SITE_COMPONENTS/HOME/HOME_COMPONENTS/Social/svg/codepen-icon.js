import React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 256 256"
      preserveAspectRatio="xMinYMin meet"
      {...props}
    >
      <path d="M255.807 87.087c-.059-.31-.11-.62-.193-.924-.052-.183-.114-.355-.172-.535a11.007 11.007 0 00-.283-.8c-.076-.182-.162-.358-.245-.534a9.74 9.74 0 00-.376-.73c-.096-.176-.207-.342-.313-.51a11.038 11.038 0 00-.842-1.142 11.166 11.166 0 00-.544-.596c-.145-.145-.29-.29-.442-.431a9.07 9.07 0 00-.624-.52c-.165-.128-.327-.26-.5-.377-.061-.044-.117-.096-.182-.138l-116.992-78a10.989 10.989 0 00-12.201 0l-117 77.998c-.065.041-.116.093-.182.138-.172.12-.334.248-.5.376a15.52 15.52 0 00-.624.517 8.604 8.604 0 00-.438.43c-.193.194-.372.39-.548.597a6.88 6.88 0 00-.376.483c-.165.217-.317.438-.465.669-.107.169-.214.334-.314.51a9.593 9.593 0 00-.372.724c-.083.176-.172.355-.245.534-.107.262-.2.531-.286.8-.058.18-.12.355-.169.517-.08.303-.138.61-.193.924-.03.159-.069.314-.09.476-.062.475-.096.951-.096 1.437v78.016c0 .482.034.965.103 1.437.025.173.07.31.104.476.055.31.103.62.207.931.048.172.103.345.172.534.086.276.172.552.276.804.072.172.172.344.241.517.114.241.242.482.38.734.096.172.206.345.31.503.148.242.31.449.482.655.121.173.242.31.38.476.175.207.344.414.551.597.141.137.276.31.448.413.2.173.414.345.62.524.166.138.346.242.483.376.066.034.104.103.173.134l116.968 78.04a10.815 10.815 0 006.102 1.851 11.06 11.06 0 006.102-1.85l117-78c.065-.04.12-.089.182-.134.172-.12.334-.248.5-.375.214-.17.424-.345.624-.524.151-.135.296-.283.441-.428a9.876 9.876 0 00.92-1.072 14.55 14.55 0 00.78-1.172c.138-.242.258-.486.375-.734.083-.176.17-.352.245-.531.107-.266.197-.535.283-.804.058-.179.12-.355.172-.534.08-.303.135-.614.193-.924.028-.159.07-.314.086-.476.063-.475.097-.951.097-1.437V89c0-.486-.038-.962-.097-1.438-.027-.169-.079-.306-.113-.475h.017zm-127.81 66.935l-38.905-26.021 38.905-26.025 38.907 26.025-38.907 26.021zm-10.998-71.155l-47.692 31.9L30.81 89.013 117 31.555v51.312zm-67.477 45.13l-27.517 18.406v-36.811l27.517 18.405zm19.785 13.245L117 173.138v51.312l-86.19-57.465 38.498-25.75v.007zm69.69 31.89l47.692-31.896 38.501 25.749-86.193 57.458v-51.312zm67.477-45.128l27.521-18.409v36.815l-27.52-18.413v.007zm-19.785-13.238L138.997 82.87V31.555l86.193 57.459-38.5 25.752z" />
    </svg>
  );
}

export default SvgComponent;
