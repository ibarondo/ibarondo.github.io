const video = document.getElementById("video");
const captureBtn = document.getElementById("capture");
const photosContainer = document.getElementById("photos");
const retakeBtn = document.getElementById("retake");
const downloadBtn = document.getElementById("download");
// const dateCapture = document.getElementById("date");

const capturedPhotos = [];

// access the camera
navigator.mediaDevices.getUserMedia({
    video: {
        width: 465,
        height: 405
    }
}).then((stream) => {
    video.srcObject = stream;
});

// time
// function formatDate(date) {
//     const month = date.getMonth() + 1;
//     const day = date.getDate();
//     const year = date.getFullYear().toString().slice(-2);
//     return `${month}.${day}.${year}`;
// }

// capture image
captureBtn.addEventListener("click", function () {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");

    canvas.width = 207;
    canvas.height = 170;

    const targetAspectRatio = 207 / 170;
    const videoWidth = video.videoWidth;
    const videoHeight = video.videoHeight;
    const videoAspectRatio = videoWidth / videoHeight;

    let sx, sy, sWidth, sHeight;

    if (videoAspectRatio > targetAspectRatio) {
        // Video is wider than target aspect
        sHeight = videoHeight;
        sWidth = sHeight * targetAspectRatio;
        sx = (videoWidth - sWidth) / 2;
        sy = 0;
    } else {
        // Video is taller than target aspect
        sWidth = videoWidth;
        sHeight = sWidth / targetAspectRatio;
        sx = 0;
        sy = (videoHeight - sHeight) / 2;
    }

    context.translate(canvas.width, 0);
    context.scale(-1, 1);

    context.drawImage(video, sx, sy, sWidth, sHeight, 0, 0, canvas.width, canvas.height);

    var imageData = canvas.toDataURL("image/png");

    if (capturedPhotos.length < 3) {
        capturedPhotos.push(imageData);

        var photo = document.createElement("div");
        photo.classList.add("photo");

        var imgElement = document.createElement("img");
        imgElement.src = imageData;
        imgElement.style.width = "100%";
        imgElement.style.objectFit = "contain";

        photo.appendChild(imgElement);

        photosContainer.prepend(photo);

        if (capturedPhotos.length === 3) {
            downloadBtn.style.display = "block";
        }
    }
});



// retake image 
retakeBtn.addEventListener("click", function () {
    capturedPhotos.length = 0;
    photosContainer.innerHTML = "";
    downloadBtn.style.display = "none";
});

// download image
downloadBtn.addEventListener("click", function () {
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");

    canvas.width = 251;
    canvas.height = 590;

    context.fillStyle = "#FFF8F9";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const imageWidth = 207;
    const imageHeight = 170;
    const gap = 20;
    const topMargin = 20;

    const xPosition = (canvas.width - imageWidth) / 2;

    var imagesLoaded = 0;

    for (let i = 0; i < capturedPhotos.length; i++) {
        let img = new Image();
        img.src = capturedPhotos[i];
        img.onload = function () {
            var yPosition = topMargin + (imageHeight + gap) * i;

            context.drawImage(img, xPosition, yPosition, imageWidth, imageHeight);
            imagesLoaded++;

            if (imagesLoaded === capturedPhotos.length) {

                // const now = new Date();
                // const formattedDate = formatDate(now);
                // context.font = "700 25px 'Inter', sans-serif";
                // context.fillStyle = "black";
                // context.textAlign = "center";
                // context.textBaseline = "middle";
                // const dateYPosition = canvas.height - 48;
                // context.fillText(formattedDate, canvas.width / 2, dateYPosition);

                var dataURL = canvas.toDataURL("image/png");

                var a = document.createElement("a");
                a.href = dataURL;
                a.download = "photo-strip.png";
                a.click();
            }
        };
    }
});