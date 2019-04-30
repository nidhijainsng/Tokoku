const initScratchCard = (config) => {
    let options = {
        id: 'scratch_card_canvas',
        brushSize: 40,
        lineJoin: 'round',
        percentRequired: 80,
        coverImageSrc: config.coverImage,
    };
    let yourScratchCard = new ScratchCard(options);
    yourScratchCard.addEventListener('success', function (e) {
          alert(config.successMessage);
          ubsApp.renderPageByName(config.nextPage)
        }, false);
}

const calcHeight = (valueInPercentage) => {
    const currentWindowHeight = window.innerHeight;
    return currentWindowHeight*valueInPercentage/100;
}

const calcWidth = (valueInPercentage) => {
    const currentWindowWidth = window.innerWidth;
    return currentWindowWidth*valueInPercentage/100;
}

const getRandomNo = (max) => Math.floor(Math.random() * Math.floor(max));

const preProcessScratchCardConfig = (templateConfig) => {
    // make card responsive
    templateConfig.height = calcHeight(templateConfig.initHeight);
    templateConfig.width = calcWidth(templateConfig.initWidth);

    // random selection of background images
    const selectedImageIndex = getRandomNo(templateConfig.backgroundImageList.length);
    templateConfig.successMessage = templateConfig.backgroundImageList[selectedImageIndex].message;
    templateConfig.style = templateConfig.initStyle.replace('${image}', templateConfig.backgroundImageList[selectedImageIndex].image);
}