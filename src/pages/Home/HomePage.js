import { Hero } from "./componets/Hero"
import { FeaturedProducts } from "./componets/FeaturedProducts"
import { Testimonials } from "./componets/Testimonials"
import { Faq } from "./componets/Faq"
import { useTitle } from "../../hooks/useTitle"

export const HomePage = () => {
  useTitle("Home")
  return (
    <main>
       <Hero />
       <FeaturedProducts />
       <Testimonials />
       <Faq />
    </main>
  )
}
