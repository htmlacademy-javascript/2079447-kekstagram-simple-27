const SCALE_STEP = 25;
const DEFAULT_SCALE = 100;
const MIN_SCALE = 25;
const MAX_SCALE = 100;

const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const scaleImage = (value = DEFAULT_SCALE) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue - SCALE_STEP;

  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }

  scaleImage(newValue);
};
const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue + SCALE_STEP;

  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }

  scaleImage(newValue);
};

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

const resetScale = () => {
  scaleImage();
};

export { resetScale };
