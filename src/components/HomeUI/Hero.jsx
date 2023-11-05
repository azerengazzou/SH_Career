import "./../../pages/default.css"

function Hero() {
  return (
    <section class="py-7 py-md-0 bg-hero" id="home">
        <div class="container">
            <div class="row vh-md-100">
                <div class="col-md-8 col-sm-10 col-12 mx-auto my-auto text-center">
                    <h1 class="heading-black text-capitalize">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                    <p class="lead py-3">Knight is a platform that helps freelancers and companies build beautiful landing
                        pages in minutes. Sign up for free.</p>
                    <button class="btn btn-primary d-inline-flex flex-row align-items-center">
                        Get started now
                        <em class="ml-2" data-feather="arrow-right"></em>
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero;
