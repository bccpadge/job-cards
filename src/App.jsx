import { Footer } from "./components/Footer";
import { JobCard } from "./components/JobCard";
import { disclaimer } from "./constants";
export default function App() {
  return (
    <>
      <main>
        <h1 className="visually-hidden">Job Cards</h1>
        <section className="card__wrapper" aria-labelledby="title">
          <h2 className="title" id="title">Open positions</h2>
          <div className="grid">
            <JobCard />
          </div>
          <p className="disclaimer">{disclaimer.paragraph}</p>
        </section>
      </main>
      <Footer />
    </>
  )
}


