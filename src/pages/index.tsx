import Layout from "@/app/layout";
import Hero from "@/components/Hero/Hero";
import HotReviews from "@/components/HotReviews/HotReviews";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <div className="mt-32"></div>
      <HotReviews />
    </Layout>
  );
};

export default Home;
