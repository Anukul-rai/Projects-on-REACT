function Hero(){
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR 
                SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="hero-button">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shop">Also Available On</div>
            <div className="brand-image">
                <img src="/images/amazon.png" alt="ama" />
                <img src="/images/flipkart.png" alt="flip" />
            </div>
            </div>
            <div className="hero-image">
            <img src="/images/shoe_image.png" alt="shoe" />

            </div>
        </main>
    );
}
export default Hero;