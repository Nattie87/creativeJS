// JavaScript Document
window.onload = function(){
  console.log('Junior developer test. Natalie Huitson');

  // declare your variables here.
  var background;
  var circles;
  var skylogo;
  var skyText1;
  var skyText2;


  // store a reference to the canvas which we will draw on.
  var stage = new createjs.Stage('stage');

  // register the stage to handle mouse events.
  stage.enableMouseOver(10);

  // register the Ticker to listen for the tick event.
  createjs.Ticker.addEventListener("tick", handleTick, false);

  // redraw the canvas - like Event.ENTER_FRAME in Adobe Flash.
  function handleTick(event) {
    stage.update();
  }

  // create a preloader to load the images.
  var loader = new createjs.LoadQueue(false);

  // when all images are loaded call the handleAllImageLoaded function.
  loader.on('complete', handleAllImagesLoaded, this);

  // provide a manifest of files and ids to be loaded.
  loader.loadManifest([
    {id: 'background',     src: 'images/background.png'},
    {id: 'circleOffers',   src: 'images/circles.png'},
    {id: 'logo',           src: 'images/skylogo.png'},
    {id: 'broadbandText',  src: 'images/skyText1.png'},
    {id: 'rewardText',     src: 'images/skyText2.png'}
  ]);



  function handleAllImagesLoaded() {
    console.log('All the images have loaded.');
    drawTheBannerBackground();
  }

  function drawTheBannerBackground() {
    console.log('draw and animate the background.');

    // provide the loader result for the item with id == 'background'
    // as a bitmap which will be stored in our background variable.
    background = new createjs.Bitmap( loader.getResult( 'background' ) );

    // set the background bitmap alpha to zero.
    background.alpha = 0;

    // add background to the display list.
    stage.addChild( background );

    // animate the background bitmap alpha value to 1 over the duration of 1000 milliseconds.
    createjs.Tween.get( background ).to( {alpha: 1}, 1000 );

    // after the background is drawn on the canvas draw and animate the content for frame 1.
    setTimeout(frame1, 100);
  }

  function frame1() {
    console.log('draw and animate frame one.');

    circles          = new createjs.Bitmap( loader.getResult('circleOffers'));
    circles.x        = 55;
    circles.y        = 115;
    stage.addChild(circles);
    createjs.Tween.get(circles)
    .wait(4000)
    .to({ alpha: 0}, 1000);

    skylogo           = new createjs.Bitmap( loader.getResult('logo'));
    skylogo.x         = 20;
    skylogo.y         = 200;
    stage.addChild(skylogo);
    stage.update;

    skyText1          = new createjs.Bitmap( loader.getResult('broadbandText'));
    skyText1.x        = 50;
    skyText1.y        = 20;
    skyText1.alpha    = 0;
    stage.addChild(skyText1);
    createjs.Tween.get(skyText1)
    .to({ alpha: 1},1000)
    .wait(3000)
    .to({ alpha: 0}, 1000);

    skyText2          = new createjs.Bitmap( loader.getResult('rewardText'));
    skyText2.x        = 50;
    skyText2.y        = 44;
    skyText2.alpha    = 0;
    stage.addChild(skyText2);
    createjs.Tween.get(skyText2)
    .to({ alpha: 1},1000)
    .wait(1000)
    .to({alpha: 0}, 1000);


    // after a timeout and the animations have completed, draw frame 2.
    setTimeout(frame2, 3000);
  }

  function frame2() {
    console.log('draw and animate frame two.');

    // skyText1           = new createjs.Bitmap(loader.getResult('broadbandText'));
    // skyText1.x         = 40;
    // skyText1.y         = 30;
    // skyText1.alpha     = 0;
    // stage.addChild(skyText1);
    // createjs.Tween.get(skyText1)
    // .to({ alpha: 1}, 1000)
    // .wait(2000)
    // .to({ alpha: 1}, 1000);

    skyText2            = new createjs.Bitmap(loader.getResult('rewardText'));
    skyText2.x          = 100;
    skyText2.y          = 200;
    skyText2.alpha      = 0;
    stage.addChild(skyText2);
    createjs.Tween.get(skyText2)
    .wait(1000)
    .to({ alpha: 1}, 1000)
    .wait(1400)
    .to({ alpha: 0}, 1000);


    setTimeout(frame3, 3000);
  }

  function frame3() {
    console.log("draw and animate frame three.");

    // refer to the creative brief, frame 3 for guidance.
  }

};
