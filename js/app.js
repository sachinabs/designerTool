function perform() {
  let checkBox1 = document.getElementById("check1").checked;
  let checkBox2 = document.getElementById("check2").checked;
  let checkBox3 = document.getElementById("check3").checked;

  let value = document.getElementById("key").value;
  if (value == "") {
    alert("Enter Keyword..!")
  }
  else {
    if (checkBox1 == false & checkBox2 == false & checkBox3 == false) {
      alert("Choose website");
    }
    else {
      let website = ["https://www.pexels.com/search/", "https://unsplash.com/s/photos/", "https://www.freepik.com/search?format=search&page=1&query="];
      if (checkBox1 == true) {
        chrome.tabs.create({ url: website[0] + value, selected: true });
      }
      if (checkBox2 == true) {
        chrome.tabs.create({ url: website[1] + value, selected: true });
      }
      if (checkBox3 == true) {
        chrome.tabs.create({ url: website[2] + value, selected: true });
      }
    }

  }



}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("action").addEventListener("click", perform)
});


function forQr() {
  let qrtext = document.getElementById("text").value;

  if (qrtext == "") {
    document.getElementById("invQr").innerHTML = "Required field";
  } else {
    document.getElementById("invQr").innerHTML = "";
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      correctLevel: QRCode.CorrectLevel.H,
    });

    function makeCode() {
      var elText = document.getElementById("text");

      if (!elText.value) {
        alert("Input a text");
        elText.focus();
        return;
      }
      qrcode.makeCode(elText.value);


    }
  }

  makeCode();
}


// function call trigger for get qr:

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("qrBut").addEventListener("click", forQr);
});



function pageReload() {
  location.reload();
}

// function call trigger for reset page , 
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("reset").addEventListener("click", pageReload);
});


function IconSearch() {
  let checkBox4 = document.getElementById("check4").checked;
  let checkBox5 = document.getElementById("check5").checked;
  let checkBox6 = document.getElementById("check6").checked;

  let value = document.getElementById("keyIcon").value;
  if (value == "") {
    alert("Enter Keyword..!")
  }
  else {
    if (checkBox4 == false & checkBox5 == false & checkBox6 == false) {
      alert("Choose website");
    }
    else {
      let website = ["https://www.flaticon.com/search?word=", " https://fonts.google.com/icons?icon.query=", "https://www.freepik.com/search?format=search&page=1&query="];
      if (checkBox4 == true) {
        chrome.tabs.create({ url: website[0] + value + "&type=icon", selected: true });
      }
      if (checkBox5 == true) {
        chrome.tabs.create({ url: website[1] + value, selected: true });
      }
      if (checkBox6 == true) {
        chrome.tabs.create({ url: website[2] + value + "&type=icon", selected: true });
      }
    }

  }



}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("actionIcon").addEventListener("click", IconSearch)
});

  

function InspirationSearch() {
  let checkBox7 = document.getElementById("check7").checked;
  let checkBox8 = document.getElementById("check8").checked;


  let value = document.getElementById("keySearch").value;
  if (value == "") {
    alert("Enter Keyword..!")
  }
  else {
    if (checkBox7 == false & checkBox8 == false) {
      alert("Choose website");
    }
    else {
      let website = ["https://www.youtube.com/results?search_query=", " https://dribbble.com/search/"];
      if (checkBox7 == true) {
        chrome.tabs.create({ url: website[0] + value, selected: true });
      }
      if (checkBox8 == true) {
        chrome.tabs.create({ url: website[1] + value, selected: true });
      }
    }

  }



}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("actionSearch").addEventListener("click", InspirationSearch)
});


// QuickSearch



function QuickSearch() {
  let checkBox9 = document.getElementById("check9").checked;
  let checkBox10 = document.getElementById("check10").checked;
  let checkBox11 = document.getElementById("check11").checked;

  let value = document.getElementById("QuickSearch").value;
  if (value == "") {
    alert("Enter Keyword..!")
  }
  else {
    if (checkBox9 == false & checkBox10 == false & checkBox11 == false) {
      alert("Choose website");
    }
    else {
      let website = ["https://www.google.com/search?q=", " https://duckduckgo.com/?q=","https://www.bing.com/search?q="];
      if (checkBox9 == true) {
        chrome.tabs.create({ url: website[0] + value, selected: true });
      }
      if (checkBox10 == true) {
        chrome.tabs.create({ url: website[1] + value, selected: true });
      }
      if (checkBox11 == true) {
        chrome.tabs.create({ url: website[2] + value, selected: true });
      }
    }

  }



}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("QuickSearchbut").addEventListener("click", QuickSearch)
});