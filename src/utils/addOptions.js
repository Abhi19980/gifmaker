const addOptions = (text, videoEl) => ({
  gifWidth: 500,
  gifHeight: 500,
  interval: 0.1,
  numFrames: 20,
  frameDuration: 1,
  fontWeight: 'bold',
  fontSize: '36px',
  fontFamily: 'Arial',
  fontColor: '#fff',
  textAlign: 'center',
  textBaseline: 'bottom',
  sampleInterval: 10,
  numWorkers: 2,
  text: text,
  webcamVideoElement: videoEl,
});

export default addOptions;
