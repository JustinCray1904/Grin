export function drawWaveform(analyser, canvas) {
  const ctx = canvas.getContext("2d");
  analyser.fftSize = 2048;
  const data = new Uint8Array(analyser.fftSize);

  function draw() {
    requestAnimationFrame(draw);
    analyser.getByteTimeDomainData(data);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#7d4cff";
    ctx.lineWidth = 2;
    ctx.beginPath();

    const slice = canvas.width / data.length;
    let x = 0;

    for (let i = 0; i < data.length; i++) {
      const y = (data[i] / 128) * (canvas.height / 2);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      x += slice;
    }
    ctx.stroke();
  }

  draw();
}
