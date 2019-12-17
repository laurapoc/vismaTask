const xhr = new XMLHttpRequest();
const url = "https://picsum.photos/v2/list";

xhr.responseType = "json";
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log(xhr.response);
    for (let i = 0; i < xhr.response.length; i++) {
      let element = document.createElement("img");

      console.log(xhr.response[i].download_url.split("/"));
      let splitArr = xhr.response[i].download_url.split("/");
      console.log(splitArr[5], splitArr[6]);
      splitArr[5] = 200;
      splitArr[6] = 200;
      console.log(splitArr.join("/"));
      element.setAttribute("src", splitArr.join("/"));
      element.setAttribute("alt", xhr.response[i].author);
      console.log(element);
      document.getElementById("scrollbar").appendChild(element);
    }
  }
};

xhr.open("GET", url);
xhr.send();
