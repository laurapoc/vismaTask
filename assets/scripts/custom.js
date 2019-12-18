const xhr = new XMLHttpRequest();
const url = "https://picsum.photos/v2/list";

xhr.responseType = "json";
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    for (let i = 0; i < xhr.response.length; i++) {
      let element = document.createElement("img");
      let splitArr = xhr.response[i].download_url.split("/");
      splitArr[5] = 200;
      splitArr[6] = 200;
      element.setAttribute("src", splitArr.join("/"));
      element.setAttribute("alt", xhr.response[i].author);
      document.getElementById("scrollbar").appendChild(element);

      //   open large image:
      element.addEventListener("click", function() {
        let largeImage = document.getElementById("full-image");
        if (!largeImage) {
          largeImage = document.createElement("img");
          largeImage.setAttribute("src", xhr.response[i].download_url);
          largeImage.setAttribute("id", "full-image");
          document.getElementById("largeImage").appendChild(largeImage);
        }
        document.getElementById("full-image").setAttribute("src", xhr.response[i].download_url);
        document.getElementById("p1").innerHTML =
          "Author: " +
          xhr.response[i].author +
          ". Image width: " +
          xhr.response[i].width +
          " px" +
          ", height: " +
          xhr.response[i].height +
          " px.";
      });
    }
  }
};

xhr.open("GET", url);
xhr.send();
