const sidenav = document.querySelector('.sidenav');
const dashMain = document.querySelector('.dash-main');
const modal = document.querySelector('.modal-content');

let toggleSidenavState = 0;
let skillsShowState = 0;

const toggleSidenav = () => {
  switch (toggleSidenavState) {
    case 0:
      sidenav.style.left = '0px';
      sidenav.style.boxShadow = '2px 0px 7px -3px rgba(0, 0, 0, 1)';
      toggleSidenavState = 1;

      break;
    case 1:
      sidenav.style.left = '-240px';
      sidenav.style.boxShadow = 'none';
      toggleSidenavState = 0;
      break;
  }
};
const showMoreToggle = (element) => {
  const showMoreText = document.getElementById('show-more-text');
  const showMoreIcon = document.getElementById('show-more-icon');
  element.parentElement.click();
  switch (skillsShowState) {
    case 0:
      showMoreText.textContent = 'Show less';
      showMoreIcon.textContent = 'expand_less';
      skillsShowState = 1;
      break;

    case 1:
      showMoreText.textContent = 'Show more';
      showMoreIcon.textContent = 'expand_more';
      skillsShowState = 0;
      break;
  }
};
// toggle sidenav
document.addEventListener('click', (e) => {
  if (toggleSidenavState && e.clientX > 240) {
    toggleSidenav();
  }
});
// responsive container
window.addEventListener('resize', () => {
  const width = window.innerWidth - 257;
  document.querySelector('.dash-main').style.width = width + 'px';
});
// set width of container after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth - 257;
  document.querySelector('.dash-main').style.width = width + 'px';
  // empty carousel container
});

// Resizable textarea
function expandTextarea(id) {
  document.getElementById(id).addEventListener(
    'keyup',
    function () {
      this.style.overflow = 'hidden';
      this.style.height = 0;
      this.style.height = this.scrollHeight + 'px';
      //   this.style.transition = 'all 0.2s';
    },
    false
  );
}
expandTextarea('txtarea');

let editAboutHTML = `
<div class="modal-header border-bottom-0">
            <h5 class="modal-title align-self-center" id="exampleModalLabel">Edit About</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p class="small w-100 text-center text-muted">Sorry, something went wrong</p>
            <form action="#">
              <div>
                <!-- <label for="about-textarea text-muted small">Short description about yourself</label> -->
                <!-- <textarea class="form-control text-muted" name="about-textarea" id="about-textarea" rows="3"></textarea> -->
                <label for="txtarea" class="small">Short Description about yourself</label>
                <textarea
                  class="form-control"
                  id="txtarea"
                  spellcheck="false"
                  placeholder="Statusku..."
                  rows="3"
                  style="font-size: 14px;"
                ></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer border-top-0">
            <button class="btn border">Clear</button>
            <button type="button" class="btn btn-primary">
              Save
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            </button>
          </div>`;

let viewDetailsHTML = `
          <div class="modal-header border-bottom-0 bg-light">
            <h5 class="modal-title align-self-center" id="exampleModalLabel">Your Details</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body bg-light">
            <!-- personal details -->
            <div class="w-100 p-4 border rounded shadow-sm bg-white">
                <h6>Personal Details</h6>
                <div class="w-100 small text-muted">
                    <div class="p-1 flex-wrap list-group d-flex flex-row justify-content-between border-bottom  align-items-center">
                        <div class="font-weight-bold">Age</div>
                        <div class="text-right">20</div>
                    </div>
                    <div class="p-1 flex-wrap list-group d-flex flex-row justify-content-between border-bottom  align-items-center">
                        <div class="font-weight-bold">Gender</div>
                        <div class="text-right">Male</div>
                    </div>
                    <div class="p-1 flex-wrap list-group d-flex  flex-row justify-content-between border-bottom  align-items-center">
                        <div class="font-weight-bold">Permanent Address</div>
                        <div class="text-right">Mahendranagar, Kanchanpur, Province-07, Nepal</div>
                    </div>
                    <div class="p-1 flex-wrap list-group d-flex flex-row justify-content-between border-bottom  align-items-center">
                        <div class="font-weight-bold">Current Address</div>
                        <div class="text-right">Dharan, Sunsari, Province-01, Nepal</div>
                    </div>
                    <div class="p-1 flex-wrap list-group d-flex flex-row justify-content-between border-bottom  align-items-center">
                        <div class="font-weight-bold">Marital Status</div>
                        <div class="text-right">Single</div>
                    </div>
                    <div class="p-1 border-bottom flex-wrap list-group d-flex flex-row justify-content-between ">
                        <div class="font-weight-bold">Nationality</div>
                        <div class="text-right">Nepali</div>
                    </div>
                   
                </div>
            </div>
            <!-- Other details -->
            <div class="w-100 p-4 mt-3 border rounded shadow-sm bg-white">
                <h6 class="">Other Details</h6>
                <div class="d-flex small justify-content-between p-1 border-bottom">
                    <div class="font-weight-bold text-muted">Driver License: </div>
                    <div>No</div>
                </div>
                <!-- language header -->
                <div class="d-flex small justify-content-between p-1 border-bottom text-muted">
                    <strong style="font-size: 12px;">Language</strong>
                    <strong style="font-size: 12px;">Proficiency</strong>
                </div>
                <!-- language body -->
                <div class="d-flex small justify-content-between p-1 text-muted">
                    <div>Nepali</div>
                    <div>Expert</div>
                </div>
                <div class="d-flex small justify-content-between p-1 text-muted">
                    <div>English</div>
                    <div>medium</div>
                </div>
                <div class="d-flex small justify-content-between p-1 text-muted">
                    <div>Hindi</div>
                    <div>Medium</div>
                </div>
            </div>
            <!--  -->
            
          </div>
          <div class="modal-footer border-top-0">
            <!-- <button class="btn border">Clear</button> -->
            <button type="button" class="btn btn-secondary">
                <span class="d-flex align-items-center"><i class="material-icons mr-2" style="font-size: 1rem;">edit</i><span>Edit</span> </span> 
              <!-- <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> -->
            </button>
          </div>`;

function editAbout() {
  console.log('HEY edit');
  modal.innerHTML = editAboutHTML;
}
function viewDetails() {
  console.log('Hey view');
  modal.innerHTML = viewDetailsHTML;
}
