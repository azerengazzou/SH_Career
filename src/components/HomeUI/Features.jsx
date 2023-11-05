import "./../../pages/default.css"

function Features() {
  return (
    <div>
       <section class="py-7 bg-dark section-angle top-left bottom-left" id="features">
    <div class="container">
        <div class="row">
            <div class="col-md-6 mx-auto text-center">
                <h2 class="heading-black">Knight offers everything you need.</h2>
                <p class="text-muted lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi
                    commodo, tempus odio a, vestibulum nibh.</p>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-4">
                <div class="card">
                    <a href="#">
                        <img class="card-img-top img-raised" src="/assets/images/blog-1.jpg" alt="Blog 1"/>
                    </a>
                    <div class="card-body">
                        <a href="#" class="card-title mb-2"><h5>We launch new iOS & Android mobile apps</h5></a>
                        <p class="text-muted small-xl mb-2">Sep 27, 2018</p>
                        <p class="card-text">Nam liber tempor cum soluta nobis eleifend option congue nihil imper,
                            consectetur adipiscing elit. <a href="#">Learn more</a></p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <a href="#">
                        <img class="card-img-top img-raised" src="/assets/images/blog-2.jpg" alt="Blog 2"/>
                    </a>
                    <div class="card-body">
                        <a href="#" class="card-title mb-2"><h5>New update is available for the editor</h5></a>
                        <p class="text-muted small-xl mb-2">August 16, 2018</p>
                        <p class="card-text">Nam liber tempor cum soluta nobis eleifend option congue nihil imper,
                            consectetur adipiscing elit. <a href="#">Learn more</a></p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card">
                    <a href="#">
                        <img class="card-img-top img-raised" src="/assets/images/blog-3.jpg" alt="Blog 3"/>
                    </a>
                    <div class="card-body">
                        <a href="#" class="card-title mb-2"><h5>The story of building #1 page builder</h5></a>
                        <p class="text-muted small-xl mb-2">December 2nd, 2017</p>
                        <p class="card-text">Nam liber tempor cum soluta nobis eleifend option congue nihil imper,
                            consectetur adipiscing elit. <a href="#">Learn more</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-md-10 mx-auto">
                <div class="row feature-boxes">
                    <div class="col-md-6 box">
                        <div class="icon-box box-primary">
                            <div class="icon-box-inner">
                                <span data-feather="edit-3" width="35" height="35"></span>
                            </div>
                        </div>
                        <h5>Create once. Share everywhere.</h5>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
                            nisi commodo, tempus odio a, vestibulum nibh.</p>
                    </div>
                    <div class="col-md-6 box">
                        <div class="icon-box box-success">
                            <div class="icon-box-inner">
                                <span data-feather="monitor" width="35" height="35"></span>
                            </div>
                        </div>
                        <h5>Unlimited devices</h5>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
                            nisi commodo, tempus odio a, vestibulum nibh.</p>
                    </div>
                    <div class="col-md-6 box">
                        <div class="icon-box box-danger">
                            <div class="icon-box-inner">
                                <span data-feather="layout" width="35" height="35"></span>
                            </div>
                        </div>
                        <h5>Beautiful tempates & layouts</h5>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
                            nisi commodo, tempus odio a, vestibulum nibh.</p>
                    </div>
                    <div class="col-md-6 box">
                        <div class="icon-box box-info">
                            <div class="icon-box-inner">
                                <span data-feather="globe" width="35" height="35"></span>
                            </div>
                        </div>
                        <h5>Available globally</h5>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in
                            nisi commodo, tempus odio a, vestibulum nibh.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  );
}

export default Features;
