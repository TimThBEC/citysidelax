// js for CSL Player Dev Page

// Page connections for nested reg cards

var parentItems = ".pd-vids__cat-item-js"; // An object containing all the video categories shown on the page (filtered at the offering__wrap level)
var parentTitles = ".cat-item__title-js"; // An object containing all the category titles
var childList = ".pd-vids__vids-list-js"; // An object containing all the instances of the div into which the videos are to be placed (one per category)
var childItems = ".pd-vids__vid-item-js"; // An object containing all video items in the video collection
var childParentTitles = ".pd-vids__vids-wrap-js .pd-vid__ref-js"; // An object containing the categories associated with all the video items in the videos collection

// Doc Ready

$(document).ready(function () {
  console.log("player-dev.js loaded and ready");

  // Load training registrations to offerings
  loadVids();
}); // End doc ready

// Load training registrations to offerings

function loadVids() {
  let nbrCats = $(parentTitles).length;
  let nbrVids = $(childParentTitles).length;

  for (var i = 0; i < nbrVids; i++) {
    let regOffering = $(childParentTitles).eq(i); // The offering associated wiht this specific registration instance
    let regOfferingName = $(regOffering).text();

    for (var j = 0; j < nbrCats; j++) {
      let offering = $(parentTitles).eq(j);
      let offeringName = $(offering).text();

      if (regOfferingName === offeringName) {
        let registration = regOffering.closest(childItems);
        let offeringItem = offering.closest(parentItems);
        let regsContainer = offeringItem.find(childList);
        registration.clone(true, true).appendTo(regsContainer);
      } // end if
    } // end inner loop through categories
  } // end outer loop through videos
} // end loadVids function
