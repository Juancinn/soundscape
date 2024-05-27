import Layout from "@/app/layout";
import SearchBar from "@/components/SearchBar/SearchBar";
import AlbumGrid from "@/components/AlbumGrid/AlbumGrid";
import HotReviews from "@/components/HotReviews/HotReviews";

const Home = () => {
  return (
    <Layout>
      <SearchBar />
      <AlbumGrid />
      <HotReviews />
    </Layout>
  );
};

export default Home;
