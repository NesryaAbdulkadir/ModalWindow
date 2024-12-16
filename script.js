const simpleModal = document.getElementById("simple-modal");
const shareModal = document.getElementById("share-modal");
const openSimpleBtn = document.getElementById("open-simple");
const openShareBtn = document.getElementById("open-share");
const closeSimple = document.getElementById("close-simple");
const closeShare = document.getElementById("close-share");
const modal = document.getElementById("modal");

openSimpleBtn.addEventListener("click", () => {
  simpleModal.style.display = "block";
  shareModal.style.display = "none";
});

openShareBtn.addEventListener("click", () => {
  shareModal.style.display = "block";
  simpleModal.style.display = "none";
});

// Close the share modal
closeShare.addEventListener("click", () => {
  console.log("Close share modal clicked");
  shareModal.style.display = "none"; // Corrected to hide the modal
});

// Close the simple modal
closeSimple.addEventListener("click", () => {
  console.log("Close simple modal clicked");
  simpleModal.style.display = "none"; // Corrected to hide the modal
});
