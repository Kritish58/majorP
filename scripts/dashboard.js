const sidenav = document.querySelector('.sidenav');
const dashMain = document.querySelector('.dash-main');
const carouselContainer = document.getElementById('carouselExampleControls');
let toggleSidenavState = 0;

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
document.addEventListener('click', (e) => {
  if (toggleSidenavState && e.clientX > 240) {
    toggleSidenav();
  }
});
window.addEventListener('resize', () => {
  const width = window.innerWidth - 262;
  document.querySelector('.dash-main').style.width = width + 'px';
  adjustCarousel();
});
document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth - 262;
  document.querySelector('.dash-main').style.width = width + 'px';
  // empty carousel container
});
// carousel
// carouselContainer.innerHTML = '';

let carousel460minus = `
            <div class="carousel-inner carousel-mobile-mode">
              <div class="carousel-item active">
                <div class="d-flex justify-content-between">
                <!-- card container -->
                <div class="card-container">
                  <!-- card -->
                  <div class="card m-2 shadow-sm">
                    <div class="card-img-top p-3">
                      <div class="card-img shadow"></div>
                      <strong class="small">Delta Technical</strong>
                      <span class="small text-muted">kathmandu, Nepal</span>
                    </div>
                    <div class="card-body p-3">
                      <h5 class="card-title">.Net Developer</h5>
                      <p class="card-text">
                        04 May - 09 May 2020
                      </p>
                      <a href="#" class="btn btn-primary d-flex justify-content-center btn-secondary">Part time</a>
                    </div>
                  </div>
                  <!-- card -->
                </div>
                <!-- card container -->
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-flex justify-content-between">
                <!-- card container -->
                <div class="card-container">
                  <!-- card -->
                  <div class="card m-2 shadow-sm">
                    <div class="card-img-top p-3">
                      <div class="card-img shadow"></div>
                      <strong class="small">Delta Technical</strong>
                      <span class="small text-muted">kathmandu, Nepal</span>
                    </div>
                    <div class="card-body p-3">
                      <h5 class="card-title">.Net Developer</h5>
                      <p class="card-text">
                        04 May - 09 May 2020
                      </p>
                      <a href="#" class="btn btn-primary d-flex justify-content-center btn-secondary">Part time</a>
                    </div>
                  </div>
                  <!-- card -->
                </div>
                <!-- card container -->
                </div>
              </div>
            </div>
            `;

let carousel460plus = `
        <div class="carousel-inner carousel-tablet-mode">
              <div class="carousel-item active">
                <div class="d-flex justify-content-between">
                <!-- card container -->
                <div class="card-container">
                  <!-- card -->
                  <div class="card m-2 shadow-sm">
                    <div class="card-img-top p-3">
                      <div class="card-img shadow"></div>
                      <strong class="small">Delta Technical</strong>
                      <span class="small text-muted">kathmandu, Nepal</span>
                    </div>
                    <div class="card-body p-3">
                      <h5 class="card-title">.Net Developer</h5>
                      <p class="card-text">
                        04 May - 09 May 2020
                      </p>
                      <a href="#" class="btn btn-primary d-flex justify-content-center btn-secondary">Part time</a>
                    </div>
                  </div>
                  <!-- card -->
                </div>
                <!-- card container -->
                <!-- card container -->
                <div class="card-container">
                  <!-- card -->
                  <div class="card m-2 shadow-sm">
                    <div class="card-img-top p-3">
                      <div class="card-img shadow"></div>
                      <strong class="small">Delta Technical</strong>
                      <span class="small text-muted">kathmandu, Nepal</span>
                    </div>
                    <div class="card-body p-3">
                      <h5 class="card-title">.Net Developer</h5>
                      <p class="card-text">
                        04 May - 09 May 2020
                      </p>
                      <a href="#" class="btn btn-primary d-flex justify-content-center btn-secondary">Part time</a>
                    </div>
                  </div>
                  <!-- card -->
                </div>
                <!-- card container -->
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-flex justify-content-between">
                <!-- card container -->
                <div class="card-container">
                  <!-- card -->
                  <div class="card m-2 shadow-sm">
                    <div class="card-img-top p-3">
                      <div class="card-img shadow"></div>
                      <strong class="small">Delta Technical</strong>
                      <span class="small text-muted">kathmandu, Nepal</span>
                    </div>
                    <div class="card-body p-3">
                      <h5 class="card-title">.Net Developer</h5>
                      <p class="card-text">
                        04 May - 09 May 2020
                      </p>
                      <a href="#" class="btn btn-primary d-flex justify-content-center btn-secondary">Part time</a>
                    </div>
                  </div>
                  <!-- card -->
                </div>
                <!-- card container -->
                <!-- card container -->
                <div class="card-container">
                  <!-- card -->
                  <div class="card m-2 shadow-sm">
                    <div class="card-img-top p-3">
                      <div class="card-img shadow"></div>
                      <strong class="small">Delta Technical</strong>
                      <span class="small text-muted">kathmandu, Nepal</span>
                    </div>
                    <div class="card-body p-3">
                      <h5 class="card-title">.Net Developer</h5>
                      <p class="card-text">
                        04 May - 09 May 2020
                      </p>
                      <a href="#" class="btn btn-primary d-flex justify-content-center btn-secondary">Part time</a>
                    </div>
                  </div>
                  <!-- card -->
                </div>
                <!-- card container -->
                </div>
              </div>
            </div>
            `;

let carousel992plus = `
<div class="carousel-inner carousel-desktop-mode">
              <div class="carousel-item active">
                <div class="d-flex justify-content-between">
                <!-- card container -->
                <div class="card-container">
                  <!-- card -->
                  <div class="card m-3 shadow-sm">
                    <div class="card-img-top p-3">
                      <div class="card-img shadow"></div>
                      <strong class="small">Delta Technical</strong>
                      <span class="small text-muted">kathmandu, Nepal</span>
                    </div>
                    <div class="card-body p-3">
                      <h5 class="card-title">.Net Developer</h5>
                      <p class="card-text">
                        04 May - 09 May 2020
                      </p>
                      <a href="#" class="btn btn-primary d-flex justify-content-center btn-secondary">Part time</a>
                    </div>
                  </div>
                  <!-- card -->
                </div>
                <!-- card container -->
                <!-- card container -->
                <div class="card-container">
                  <!-- card -->
                  <div class="card m-3 shadow-sm">
                    <div class="card-img-top p-3">
                      <div class="card-img shadow"></div>
                      <strong class="small">Delta Technical</strong>
                      <span class="small text-muted">kathmandu, Nepal</span>
                    </div>
                    <div class="card-body p-3">
                      <h5 class="card-title">.Net Developer</h5>
                      <p class="card-text">
                        04 May - 09 May 2020
                      </p>
                      <a href="#" class="btn btn-primary d-flex justify-content-center btn-secondary">Part time</a>
                    </div>
                  </div>
                  <!-- card -->
                </div>
                <!-- card container -->
                <!-- card container -->
                <div class="card-container">
                  <!-- card -->
                  <div class="card m-3 shadow-sm">
                    <div class="card-img-top p-3">
                      <div class="card-img shadow"></div>
                      <strong class="small">Delta Technical</strong>
                      <span class="small text-muted">kathmandu, Nepal</span>
                    </div>
                    <div class="card-body p-3">
                      <h5 class="card-title">.Net Developer</h5>
                      <p class="card-text">
                        04 May - 09 May 2020
                      </p>
                      <a href="#" class="btn btn-primary d-flex justify-content-center btn-secondary">Part time</a>
                    </div>
                  </div>
                  <!-- card -->
                </div>
                <!-- card container -->
                <!-- card container -->
                <div class="card-container">
                  <!-- card -->
                  <div class="card m-3 shadow-sm">
                    <div class="card-img-top p-3">
                      <div class="card-img shadow"></div>
                      <strong class="small">Delta Technical</strong>
                      <span class="small text-muted">kathmandu, Nepal</span>
                    </div>
                    <div class="card-body p-3">
                      <h5 class="card-title">.Net Developer</h5>
                      <p class="card-text">
                        04 May - 09 May 2020
                      </p>
                      <a href="#" class="btn btn-primary d-flex justify-content-center btn-secondary">Part time</a>
                    </div>
                  </div>
                  <!-- card -->
                </div>
                <!-- card container -->
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-flex justify-content-between">
                <!-- card container -->
                <div class="card-container">
                  <!-- card -->
                  <div class="card m-3 shadow-sm">
                    <div class="card-img-top p-3">
                      <div class="card-img shadow"></div>
                      <strong class="small">Delta Technical</strong>
                      <span class="small text-muted">kathmandu, Nepal</span>
                    </div>
                    <div class="card-body p-3">
                      <h5 class="card-title">.Net Developer</h5>
                      <p class="card-text">
                        04 May - 09 May 2020
                      </p>
                      <a href="#" class="btn btn-primary d-flex justify-content-center btn-secondary">Part time</a>
                    </div>
                  </div>
                  <!-- card -->
                </div>
                <!-- card container -->
                  <!-- card container -->
                  <div class="card-container">
                    <!-- card -->
                    <div class="card m-3 shadow-sm">
                      <div class="card-img-top p-3">
                        <div class="card-img shadow"></div>
                        <strong class="small">Delta Technical</strong>
                        <span class="small text-muted">kathmandu, Nepal</span>
                      </div>
                      <div class="card-body p-3">
                        <h5 class="card-title">.Net Developer</h5>
                        <p class="card-text">
                          04 May - 09 May 2020
                        </p>
                        <a href="#" class="btn btn-primary d-flex justify-content-center btn-secondary">Part time</a>
                      </div>
                    </div>
                    <!-- card -->
                  </div>
                  <!-- card container -->
                  <!-- card container -->
                <div class="card-container">
                  <!-- card -->
                  <div class="card m-3 shadow-sm">
                    <div class="card-img-top p-3">
                      <div class="card-img shadow"></div>
                      <strong class="small">Delta Technical</strong>
                      <span class="small text-muted">kathmandu, Nepal</span>
                    </div>
                    <div class="card-body p-3">
                      <h5 class="card-title">.Net Developer</h5>
                      <p class="card-text">
                        04 May - 09 May 2020
                      </p>
                      <a href="#" class="btn btn-primary d-flex justify-content-center btn-secondary">Part time</a>
                    </div>
                  </div>
                  <!-- card -->
                </div>
                <!-- card container -->
                  <div style="color:transparent" class="">invisible invisible and again invisible </div>
                </div>
              </div>
            </div>
            `;

//function to adjust carousel
const adjustCarousel = () => {
  if (window.innerWidth > 460) {
    console.log('Hey 460 plus');
    carouselContainer.innerHTML = carousel460plus;
  }

  if (window.innerWidth < 460) {
    console.log('HEy');
    carouselContainer.innerHTML = carousel460minus;
  }
  if (window.innerWidth > 992) {
    console.log('HEY 992');
    carouselContainer.innerHTML = carousel992plus;
  }
};
adjustCarousel();
