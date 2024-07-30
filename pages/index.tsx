import HomeHead from "@/pages/ui/Home/HomeHead";
import HomeFavorite from "@/pages/ui/Home/HomeFavorite";
import HomeCardGrid from "@/pages/ui/Home/HomeCardGrid";

export default function Home() {
  return (
    <>
      <HomeHead/>
      <main className={'background: white;'}>
        <div>
          <HomeFavorite/>
          <HomeCardGrid/>
        </div>
      </main>
    </>
  );
}
