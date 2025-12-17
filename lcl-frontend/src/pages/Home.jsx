function Home() {
  return (
    <section className="bg-black text-white min-vh-100 d-flex align-items-center">
      <div className="container text-center">
        <h1 className="display-3 fw-bold">
          Lion Combat League
        </h1>

        <p className="lead mt-4">
          MMA • Boxing • Muay Thai
        </p>

        <p className="text-secondary mt-3">
          Professional Combat Sports Promotion | Sri Lanka
        </p>

        <div className="mt-5 d-flex justify-content-center gap-3">
          <a href="#" className="btn btn-outline-light btn-lg me-3">
            About LCL
          </a>
          <a href="#" className="btn btn-warning btn-lg">
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
