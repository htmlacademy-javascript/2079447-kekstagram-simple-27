import { effectSliderData } from './effects-data.js';

const previewImage = document.querySelector('.img-upload__preview img');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const radioElements = document.querySelectorAll('.effects__radio');
const effectLevel = document.querySelector('.effect-level');

const defaultEffect = effectSliderData[0];
let chosenEffect = defaultEffect;

const isDefault = () => chosenEffect === defaultEffect;

const updateSlider = () => {
  sliderElement.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.start,
  });


  if (isDefault()) {
    sliderElement.classList.add('hidden');
  }
};


const onEffectChage = (evt) => {

  if (!evt.target.id) {
    return;
  }

  const onEffectChageData = effectSliderData.find((item) => item.name === evt.target.id);
  chosenEffect = onEffectChageData;
  updateSlider();
};

const onSliderUpdate = () => {
  effectLevel.classList.add('hidden');
  previewImage.style.filter = 'none';
  previewImage.className = '';
  valueElement.value = '';

  if (isDefault()) {
    return;
  }
  effectLevel.classList.remove('hidden');

  const sliderValue = sliderElement.noUiSlider.get();
  previewImage.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  previewImage.classList.add(`effects__preview--${chosenEffect.name}`);
  valueElement.value = sliderValue;
};


const resetEffects = () => {
  chosenEffect = defaultEffect;
  updateSlider();
};

const createSlider = () => {
  effectLevel.classList.add('hidden');
  noUiSlider.create(sliderElement, {
    range: {
      min: defaultEffect.min,
      max: defaultEffect.max,
    },
    start: defaultEffect.max,
    step: defaultEffect.step,
    connect: 'lower',
  });
};

const initSlider = () => {
  createSlider();
  radioElements.forEach((item) => {
    item.addEventListener('change', onEffectChage);
  });

  sliderElement.noUiSlider.on('update', onSliderUpdate);
};

export { initSlider, resetEffects };
