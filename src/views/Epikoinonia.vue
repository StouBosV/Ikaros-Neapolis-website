<template>
  <div>
    <div>
      <header class="jumbotron">
        <div class="container">
          <h1>Επικοινωνία</h1>
          <p>Μπορείτε να επικοινωνήσετε μαζί μας με τους παρακάτω τρόπους, είτε αυτοπροσώπως στο κλειστό γυμναστήριο του 44ου Δημοτικού Σχολείου Λάρισας τις ώρες των προπονήσεων. </p>
        </div>
      </header>
      <div class="container">
          <div class="row">
              <div class="col-md-4">
                <i class="fab fa-facebook fa-10x"></i>
                <div class="description">
                  <a href="https://www.facebook.com/ikarosneapolisbc/">Ikaros Neapolis Larissa B.C.</a>
                </div>
              </div>
              <div class="col-md-4">
                <i class="fas fa-phone-square-alt fa-10x"></i>
                <div class="description">
                  <a href="tel:+306948747837">694 874 7837</a>
                </div>
              </div>
              <div class="col-md-4">
                <i class="fas fa-envelope fa-10x"></i>
                <div class="description">
                  <a href="mailto:ikarosneapolis.bc@gmail.com">ikarosneapolis.bc@gmail.com</a>
                </div>
              </div>
          </div>
          <div class="mapouter row">
            <div class="gmap_canvas">
              <iframe width="100%" height="500px" id="gmap_canvas" src="https://maps.google.com/maps?q=44o%20dimotiko%20larisas&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                      frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>


<style>
  .description {
    margin-top: 5px;
    margin-bottom: 30px;
  }
  .mapouter {
    position:relative;
    text-align:right;
    height:100%;
    width:100%;
    border:3px solid #000f3e;
  }
  .gmap_canvas {
    overflow:hidden;
    background:none!important;
    height: 100%;
    width: 100%;
  }
  .jumbotron {
    background-color: #000f3e;
    color: floralwhite;
  }
</style>
