const previewImage = document.querySelector('.img-upload__preview');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
const radioElements = document.querySelectorAll('.effects__radio');

const effectSlider = [
  {
    name: 'effect-none',
    style: 'none',
    min: 0,
    max: 0,
    step: 0.1,
    start: 0,
    unit: ''
  },
  {
    name: 'effect-chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    start: 1,
    unit: ''
  },
  {
    name: 'effect-sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    start: 1,
    unit: 'none'
  },
  {
    name: 'effect-marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    start: 100,
    unit: '%'
  },
  {
    name: 'effect-phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    start: 3,
    unit: 'px'
  },
  {
    name: 'effect-heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    start: 3,
    unit: ''
  }
];

const defaultEffect = effectSlider[0];
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


const currentEffect = (evt) => {
  if (!evt.target.id) {
    return;
  }
  const currentEffectData = effectSlider.find((item) => item.name === evt.target.id);
  chosenEffect = currentEffectData;
  updateSlider();
};

const onSliderUpdate = () => {
  previewImage.style.filter = 'none';
  previewImage.className = '';
  valueElement.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  previewImage.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  previewImage.classList.add(`effects__preview--${chosenEffect.name}`);
  valueElement.value = sliderValue;
};


const resetEffects = () => {
  chosenEffect = defaultEffect;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: defaultEffect.min,
    max: defaultEffect.max,
  },
  start: defaultEffect.start,
  step: defaultEffect.step,
  connect: 'lower',
});

radioElements.forEach((item) => {
  item.addEventListener('change', currentEffect);
});
sliderElement.noUiSlider.on('update', onSliderUpdate);

export { resetEffects };
