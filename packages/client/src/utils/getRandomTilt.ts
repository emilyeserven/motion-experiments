import type { OptionType } from "@/components/Card";

/**
 * Function to get a random degree of tilt for cards. Makes sure stuff isn't too subtle.
 * @param icon
 */
export function getRandomTilt(icon?: OptionType) {
  let randomTilt = 0;
  const iconExistsAndNameIsLong = icon && icon?.length > 5;
  if (Number(icon?.length) === 5) {
    randomTilt = -(Math.random() * Number(icon?.length));

    if (randomTilt > -1.5) {
      randomTilt = randomTilt - Number(icon?.length);
    }
  }
  else {
    randomTilt = Math.random() * Number(iconExistsAndNameIsLong ? 5 : icon?.length);

    if (randomTilt < 1.5) {
      randomTilt = randomTilt + Number(icon?.length);
    }
  }
  return randomTilt;
}
