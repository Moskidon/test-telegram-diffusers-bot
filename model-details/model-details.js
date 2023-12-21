document.addEventListener('DOMContentLoaded', function () {
  Telegram.WebApp.ready();
  var params = new URLSearchParams(window.location.search);
  var imageId = params.get('imageId');
  Telegram.WebApp.BackButton.show();
  Telegram.WebApp.BackButton.onClick(() => {
    window.location.href = 'index.html';
    Telegram.WebApp.BackButton.hide();
  });

  const image = images[parseInt(imageId)];

  function addTitleAndDescription() {
    const imageData = image;
    const title = imageData.title;
    const description = imageData.description;

    const titleContainer = document.createElement('div');
    titleContainer.className = 'title-container';

    const titleElement = document.createElement('h1');
    titleElement.textContent = title;
    titleElement.className = 'image-title';
    titleContainer.appendChild(titleElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.className = 'image-description';
    descriptionElement.textContent = description;
    descriptionElement.style.display = 'none';
    titleContainer.appendChild(descriptionElement);

    const toggleButton = document.createElement('span');
    toggleButton.textContent = 'Expand...';
    toggleButton.className = 'toggle-button';
    titleContainer.appendChild(toggleButton);

    const sliderElement = createImageSlider(imageData.samples);

    const imageContainer = document.getElementById('image-container');

    imageContainer.insertBefore(sliderElement, imageContainer.firstChild);
    imageContainer.insertBefore(titleContainer, sliderElement.nextSibling);

    titleContainer.addEventListener('click', function () {
      const isExpanded = descriptionElement.style.display === 'block';
      descriptionElement.style.display = isExpanded ? 'none' : 'block';
      toggleButton.textContent = isExpanded ? 'Expand' : 'Collapse';
    });
  }

  function createImageSlider(samples) {
    const slider = document.createElement('div');
    slider.className = 'image-slider';

    const loaderWrapper = document.createElement('div');
    loaderWrapper.className = 'loaderWrapper';
    const loader = document.createElement('div');
    loader.className = 'loader';
    loaderWrapper.appendChild(loader);
    slider.appendChild(loaderWrapper);
    loader.style.display = 'block';

    samples.forEach((sample) => {
      const img = document.createElement('img');
      img.src = sample;

      img.onload = () => {
        loader.style.display = 'none';
      };

      slider.appendChild(img);
    });

    if (samples.length > 0) {
      setTimeout(() => {
        slider.scrollLeft =
          slider.firstChild.clientWidth / 2 - slider.clientWidth / 2;
      }, 0);
    }

    const leftButton = document.createElement('button');
    leftButton.className = 'slider-button left';
    leftButton.textContent = '<';
    slider.appendChild(leftButton);

    const rightButton = document.createElement('button');
    rightButton.className = 'slider-button right';
    rightButton.textContent = '>';
    slider.appendChild(rightButton);

    leftButton.addEventListener('click', () => {
      slider.scrollLeft -= slider.childNodes[1].clientWidth;
    });

    rightButton.addEventListener('click', () => {
      slider.scrollLeft += slider.childNodes[1].clientWidth;
    });

    return slider;
  }

  addTitleAndDescription();

  function createInputWithSlider(label, id, defaultValue, step, min, max) {
    const container = document.createElement('div');
    container.className = 'input-container';

    const labelElement = document.createElement('label');
    labelElement.htmlFor = id;
    labelElement.textContent = label + ':';

    const inputElement = document.createElement('input');
    inputElement.type = 'number';
    inputElement.id = id;
    inputElement.name = id;
    inputElement.value = defaultValue;
    inputElement.step = step;
    inputElement.min = min;
    inputElement.max = max;

    const sliderElement = document.createElement('input');
    sliderElement.type = 'range';
    sliderElement.id = id + '-slider';
    sliderElement.name = id + '-slider';
    sliderElement.value = defaultValue;
    sliderElement.step = step;
    sliderElement.min = min;
    sliderElement.max = max;

    const flexContainer = document.createElement('div');
    flexContainer.style.display = 'flex';

    inputElement.addEventListener('input', function () {
      sliderElement.value = this.value;
    });

    sliderElement.addEventListener('input', function () {
      inputElement.value = this.value;
    });

    flexContainer.appendChild(inputElement);
    flexContainer.appendChild(sliderElement);

    container.appendChild(labelElement);
    container.appendChild(flexContainer);

    return container;
  }

  var selectedDimensionIndex;
  const dimensionItems = [];

  function selectDimension(dimensionIndex) {
    if (selectedDimensionIndex != undefined) {
      const oldSelectedDimensionItem = dimensionItems[selectedDimensionIndex];
      oldSelectedDimensionItem.className = 'dimensions-picker-item';
    }
    selectedDimensionIndex = dimensionIndex;
    const selectedDimensionItem = dimensionItems[selectedDimensionIndex];
    selectedDimensionItem.className = 'dimensions-picker-item active';
  }

  function addDimensions() {
    const body = document.getElementById('dimensions-picker');
    const dimensions = image.dimensions;
    dimensions.forEach((dimension, index) => {
      const element = document.createElement('div');
      element.className = 'dimensions-picker-item';
      element.textContent = `${dimension.width} × ${dimension.height}`;
      element.onclick = () => {
        selectDimension(index);
      };
      dimensionItems.push(element);
      body.appendChild(element);
    });
  }

  addDimensions();
  selectDimension(0);

  var isRandomSeed = true;
  var seedRandomNode = document.getElementById('seed-option-random');
  var seedCustomNode = document.getElementById('seed-option-custom');
  var seedValueNode = document.getElementById('seed-value');

  seedRandomNode.addEventListener('click', () => {
    setRandomSeed(true);
    seedValueNode.className = 'seed-value disabled';
  });

  seedCustomNode.addEventListener('click', () => {
    setRandomSeed(false);
    seedValueNode.className = 'seed-value';
  });

  function setRandomSeed(isRandom) {
    if (isRandom) {
      seedRandomNode.className = 'seed-option-item active';
      seedCustomNode.className = 'seed-option-item';
    } else {
      seedRandomNode.className = 'seed-option-item';
      seedCustomNode.className = 'seed-option-item active';
    }
  }

  function loadConfigurableInputs() {
    const configurableParams = image.configurableParams;
    const inputsGroup = document.getElementById('configurable-inputs');
    console.log(inputsGroup);
    Object.keys(configurableParams).forEach((key) => {
      const params = configurableParams[key];
      const type = params.type;
      var input;
      switch (type) {
        case 'slider':
          input = createInputWithSlider(
            params.label,
            key,
            params.value,
            params.step,
            params.min,
            params.max
          );
          break;
        default:
          break;
      }
      inputsGroup.appendChild(input);
    });
  }

  function loadSettings() {
    var savedSettings = localStorage.getItem('settings');
    if (savedSettings) {
      savedSettings = JSON.parse(savedSettings);
      if (savedSettings[imageId]) {
        Object.keys(savedSettings[imageId]).forEach((key) => {
          const inputElement = document.getElementById(key);
          if (inputElement) {
            inputElement.value = savedSettings[imageId][key];
          }
        });
      }
    }
  }

  loadConfigurableInputs();
  loadSettings();

  var dropdownLabel = document.getElementById('dropdown-label');
  var dropdownOptions = document.querySelector('.dropdown-options');

  dropdownLabel.textContent = samplers[0];

  samplers.forEach(function (sampler) {
    var option = document.createElement('div');
    option.textContent = sampler;
    option.onclick = function () {
      dropdownLabel.textContent = sampler;
      dropdownOptions.style.display = 'none';
    };
    dropdownOptions.appendChild(option);
  });

  document
    .querySelector('.dropdown-header')
    .addEventListener('click', function () {
      var style = window.getComputedStyle(dropdownOptions);
      dropdownOptions.style.display =
        style.display === 'none' ? 'block' : 'none';
    });

  document
    .getElementById('use-settings-button')
    .addEventListener('click', function () {
      var allSettings = JSON.parse(localStorage.getItem('settings')) || {};
      allSettings[imageId] = {};
      document
        .querySelectorAll('.inputs-group .input-container input')
        .forEach((input) => {
          allSettings[imageId][input.id] = input.value;
        });

      localStorage.setItem('settings', JSON.stringify(allSettings));

      Telegram.WebApp.sendData(
        JSON.stringify({
          ...allSettings[imageId],
          modelId: imageId,
        })
      );
    });
});
